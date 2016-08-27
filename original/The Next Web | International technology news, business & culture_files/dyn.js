function DynBeacon(sid, cdata, inline, inject_domain, collect_cback) {

    this.inject_domain=inject_domain != null ? inject_domain:'//beacon.rum.dynapis.com';
    this.collected=false;
    this.sid = sid;
    this.cdata = cdata;
    this.beaconUrl = null;
    this.bid = null;
    this.initial_collect = 500;
    this.defer = 15000;
    this.inline = inline;
    this.collect_cback = collect_cback;

    
    this.findResource = function (url) {
	var i;
	for (i=0; i < document.images.length;i++) {var img=document.images[i];if (img.src == url) {return img;}}
	for (i=0; i < document.scripts.length;i++) {var script=document.scripts[i];if (script.src == url) {return script;}}
	return null;
    }

    this.getTimingIndexes = function (bid) {
	var missing=[];
	var reloads=[];
	var rescnt = parseInt('0x'+bid[4]);
	var resources=window.performance.getEntriesByType('resource');
	var tests=document.getElementsByClassName(bid); 
	var results = {};
	for (var i=0;i<tests.length;i++)
	{
	    var k=tests[i].src;results[k]=-1;
	}
	var found=0;var outlier=[];
	for (var i=0; i<resources.length;i++) { 
	    var timing=resources[i];var k=timing.name;if (results[k] != -1 && results[k] != undefined) {
		var old_timing = resources[results[k]];
		if (old_timing.duration < timing.duration) {results[k] = i;}
		var resElement=this.findResource(k);
		if (resElement!=null) {
		    var oid=resElement.getAttribute('data_orgid');reloads.push(oid);reload=false;
		}
	    }
	    else if (results[k] == -1) {
		results[k] = i;}}
	for(var k in results){
	    if(results[k]==-1)missing.push(k);
	}
	return {'timings':results,'reloads':reloads,'missing':missing};
    }

    this.createTimingSeries = function() {
	var resources=window.performance.getEntriesByType('resource');
	var cnt=0;var headers=[];var timings = this.getTimingIndexes(this.bid);
	var indexes = timings['timings'];
	for (var key in indexes) {
	    var residx=indexes[key]; 
	    var resource=null;
	    if(residx!=-1) {
		resource=resources[residx];
	    }
	    var resElement=this.findResource(key);
	    if(resElement!=null){
		var oid=resElement.getAttribute('data_orgid');
		if(oid != null){
		    var size=resElement.getAttribute('data_size');
		    var oid=resElement.getAttribute('data_orgid');
		    var rid=resElement.getAttribute('data_resid');
		    var t2dns=-9000000000000000; var t2tls=0;var t2conn=t2dns;var t2fb=t2dns; var t2lb=t2dns;var t2dur=t2dns; 
		    if(resource!=null){
			t2dns=resource.domainLookupEnd-resource.domainLookupStart;
			if(isNaN(t2dns))t2dns=0; 
			t2conn=resource.connectEnd-resource.connectStart;if(isNaN(t2conn))t2conn=0;
			t2tls=resource.secureConnectionStart?(resource.connectEnd-resource.secureConnectionStart):0;if(isNaN(t2tls))t2tls=0;
			t2fb=resource.responseStart-resource.requestStart;if(isNaN(t2fb))t2fb=0;
			t2lb=resource.responseEnd-resource.responseStart;if(isNaN(t2lb))t2lb=resource.duration;
			var t2dur=resource.duration;if(t2lb==0)t2lb=t2dur;
		    }
		    headers.push([size,oid,rid,t2dns.toFixed(3),t2conn.toFixed(3),t2fb.toFixed(3),t2lb.toFixed(3),t2dur.toFixed(3),t2tls.toFixed(3)].join(','));  
		}
	    }
	}
	return {'headers':headers,'missing':timings['missing']};
    }

    this.collect = function(report_if_missing) {
	if (this.collected) return;
	if (!window.performance) return;

	var INFO = this.createTimingSeries(); 
	var xmlhttp=new XMLHttpRequest();
	xmlhttp.open('PUT', this.beaconUrl, true);
	for(var index=1;index<=INFO.headers.length;index++) 
	{
	    var idx=(index<10?'0':'')+index;
	    var hdr='r'+idx;
	    xmlhttp.setRequestHeader(hdr,INFO.headers[index-1]);
	}
	if (INFO.missing.length>0){
	    var e=[];
	    for (var i=0;i<INFO.missing.length;i++) {
		var d=INFO.missing[i];
		var elt=this.findResource(d);
		if (elt != null) {
		    e.push(elt.getAttribute('data_orgid'));
		}
	    }
	    if (e.length>0){
		var h=e.join('/');
		xmlhttp.setRequestHeader('missing',h);
	    }
	}
	
	if (!report_if_missing && INFO.missing.length > 0) {
	    return false;
	} else {
	    xmlhttp.send();
	    if (this.collect_cback) this.collect_cback();
	    this.collected = true;
	    this.cleanup();
	}
	return true;
    }

    this.cleanup = function() {
	var items = document.getElementsByClassName("res");
	for (var i =items.length-1;i >= 0; i--) {
	    var item = items[i];
	    document.body.removeChild(item)
	}
    }

    this.inject = function() {
	var injecturl = '//'+this.inject_domain+'/inject/'+this.sid+'/'+this.cdata;
	var inject = new XMLHttpRequest();
	var self = this;
	this.collected = false;

	inject.onreadystatechange = function() {
	    if (inject.readyState == XMLHttpRequest.DONE && inject.status == 200) {
		self.beaconUrl = inject.responseText;
		self.bid = self.beaconUrl.split('-')[2].split(".")[0];
		var beacon = new XMLHttpRequest();
		beacon.onreadystatechange = function() {
		    if (beacon.readyState == XMLHttpRequest.DONE && beacon.status == 200) {
			var targets = beacon.responseText.split("\n");
			for (var i =0; i < targets.length; i++) {
			    var t = targets[i];
			    if (t != "") {
				var parts = t.split(",");
				var url = parts[0]+"://"+parts[1]+parts[2]+"?"+new Date().getTime();
				var img = document.createElement("img");
				img.src = url;
				img.setAttribute("data_size",parts[3]);
				img.setAttribute("data_orgid",parts[4]);
				img.setAttribute("data_resid",parts[5]);
				img.style.display = "none";
				img.className = self.bid;
				document.body.appendChild(img);
			    }
			}
			// Try collecting
			if (self.defer >= self.initial_collect)
			    setTimeout(function(){self.collect(false)},self.initial_collect)
		    }
		}
		beacon.open('GET', self.beaconUrl, true);
		beacon.setRequestHeader('as-url','1');
		beacon.send();
	    }
	}
	inject.open('GET', injecturl, true);
	inject.send();
    }

    this.inject_iframe = function() {
	var injecturl = '//'+this.inject_domain+'/injector/'+this.sid+"/"+this.cdata;
	var req = new XMLHttpRequest();
	req.onreadystatechange = function() {
	    if (req.readyState == XMLHttpRequest.DONE && req.status == 200) {
		var ifrm = document.createElement('IFRAME'); 
		ifrm.setAttribute('src', req.responseText);
		ifrm.setAttribute('frameborder', 0);
		ifrm.setAttribute('width', 0);
		ifrm.setAttribute('height', 0);
		ifrm.setAttribute("style", "display:none !important");
		ifrm.setAttribute("hidden", "");
		ifrm.setAttribute('seamless','');
		document.body.appendChild(ifrm); 
	    }
	}
	req.open('GET', injecturl, true);
	req.setRequestHeader('as-url','1');
	req.send();
    }

    this.test = function(delay, cnt) {
	if (this.inline) {
	    if (delay == null) delay = 15000;
	    if (cnt == null) cnt = 1;
	    this.defer = delay;
	    this.defer_cnt = 1;
	    this.defer_cnt_max = Math.floor(delay/1000);
	    this.inject();
	    var self = this;
	    this.interval = setInterval(function() {
		self.defer_cnt++;
		if (self.collected) {
		    clearInterval(self.interval);
		}
		if (self.defer_cnt <= self.defer_cnt_max) {
		    var collected = self.collect(self.defer_cnt == self.defer_cnt_max ? true : false);
		    if (collected) {
			clearInterval(self.interval);
			cnt--;
			if (cnt > 0)
			    self.test(delay, cnt);
		    }
		}
	    }, 1000);

	} else {
	    this.inject_iframe();
	}
    }

}

document.onreadystatechange = function () {
    if (document.readyState == 'complete') {
	try {
	    var ignore = window.performance.getEntriesByType('resource');
	    var defer = 3000;
	    var elt = document.getElementById('beaconcfg');
	    if (elt) {
		var new_defer = parseInt(elt.getAttribute('data-defer'));
		if (!isNaN(new_defer) && new_defer >= 1000) {
		    defer = new_defer;
		}
		var cdata = "0";
		var sid = elt.getAttribute('data-id');
		if (sid != null) {
		    var data = elt.getAttribute('data-other');
		    if (data != null) cdata = data;
		    var beacon = new DynBeacon(sid, cdata, true);
		    setTimeout(function() {
			beacon.test(15000);
		    }, defer);
		}
	    }
	} catch(e) {
	}
    }
}
