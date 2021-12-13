(function(){
	function r(e,n,t){
		function o(i,f){
			if(!n[i]){
				if(!e[i]){
					var c='function'==typeof require&&require;if(!f&&c)return c(i,!0);if(u)return u(i,!0);var a=new Error('Cannot find module \''+i+'\'');throw a.code='MODULE_NOT_FOUND',a;
				}var p=n[i]={exports:{}};e[i][0].call(p.exports,function(r){
					var n=e[i][1][r];return o(n||r);
				},p,p.exports,r,e,n,t);
			}return n[i].exports;
		}for(var u='function'==typeof require&&require,i=0;i<t.length;i++)o(t[i]);return o;
	}return r;
})()({1:[function(require,module,exports){
	(function(global,factory){
		'use strict';if(typeof module==='object'&&typeof module.exports==='object'){
			module.exports=global.document?factory(global,true):function(w){
				if(!w.document){
					throw new Error('jQuery requires a window with a document');
				}return factory(w);
			};
		}else{
			factory(global);
		}
	})(typeof window!=='undefined'?window:this,function(window,noGlobal){
		'use strict';var arr=[];var getProto=Object.getPrototypeOf;var slice=arr.slice;var flat=arr.flat?function(array){
			return arr.flat.call(array);
		}:function(array){
			return arr.concat.apply([],array);
		};var push=arr.push;var indexOf=arr.indexOf;var class2type={};var toString=class2type.toString;var hasOwn=class2type.hasOwnProperty;var fnToString=hasOwn.toString;var ObjectFunctionString=fnToString.call(Object);var support={};var isFunction=function isFunction(obj){
			return typeof obj==='function'&&typeof obj.nodeType!=='number'&&typeof obj.item!=='function';
		};var isWindow=function isWindow(obj){
			return obj!=null&&obj===obj.window;
		};var document=window.document;var preservedScriptAttributes={type:true,src:true,nonce:true,noModule:true};function DOMEval(code,node,doc){
			doc=doc||document;var i,val,script=doc.createElement('script');script.text=code;if(node){
				for(i in preservedScriptAttributes){
					val=node[i]||node.getAttribute&&node.getAttribute(i);if(val){
						script.setAttribute(i,val);
					}
				}
			}doc.head.appendChild(script).parentNode.removeChild(script);
		}function toType(obj){
			if(obj==null){
				return obj+'';
			}return typeof obj==='object'||typeof obj==='function'?class2type[toString.call(obj)]||'object':typeof obj;
		}var version='3.6.0',jQuery=function(selector,context){
			return new jQuery.fn.init(selector,context);
		};jQuery.fn=jQuery.prototype={jquery:version,constructor:jQuery,length:0,toArray:function(){
			return slice.call(this);
		},get:function(num){
			if(num==null){
				return slice.call(this);
			}return num<0?this[num+this.length]:this[num];
		},pushStack:function(elems){
			var ret=jQuery.merge(this.constructor(),elems);ret.prevObject=this;return ret;
		},each:function(callback){
			return jQuery.each(this,callback);
		},map:function(callback){
			return this.pushStack(jQuery.map(this,function(elem,i){
				return callback.call(elem,i,elem);
			}));
		},slice:function(){
			return this.pushStack(slice.apply(this,arguments));
		},first:function(){
			return this.eq(0);
		},last:function(){
			return this.eq(-1);
		},even:function(){
			return this.pushStack(jQuery.grep(this,function(_elem,i){
				return(i+1)%2;
			}));
		},odd:function(){
			return this.pushStack(jQuery.grep(this,function(_elem,i){
				return i%2;
			}));
		},eq:function(i){
			var len=this.length,j=+i+(i<0?len:0);return this.pushStack(j>=0&&j<len?[this[j]]:[]);
		},end:function(){
			return this.prevObject||this.constructor();
		},push:push,sort:arr.sort,splice:arr.splice};jQuery.extend=jQuery.fn.extend=function(){
			var options,name,src,copy,copyIsArray,clone,target=arguments[0]||{},i=1,length=arguments.length,deep=false;if(typeof target==='boolean'){
				deep=target;target=arguments[i]||{};i++;
			}if(typeof target!=='object'&&!isFunction(target)){
				target={};
			}if(i===length){
				target=this;i--;
			}for(;i<length;i++){
				if((options=arguments[i])!=null){
					for(name in options){
						copy=options[name];if(name==='__proto__'||target===copy){
							continue;
						}if(deep&&copy&&(jQuery.isPlainObject(copy)||(copyIsArray=Array.isArray(copy)))){
							src=target[name];if(copyIsArray&&!Array.isArray(src)){
								clone=[];
							}else if(!copyIsArray&&!jQuery.isPlainObject(src)){
								clone={};
							}else{
								clone=src;
							}copyIsArray=false;target[name]=jQuery.extend(deep,clone,copy);
						}else if(copy!==undefined){
							target[name]=copy;
						}
					}
				}
			}return target;
		};jQuery.extend({expando:'jQuery'+(version+Math.random()).replace(/\D/g,''),isReady:true,error:function(msg){
			throw new Error(msg);
		},noop:function(){},isPlainObject:function(obj){
			var proto,Ctor;if(!obj||toString.call(obj)!=='[object Object]'){
				return false;
			}proto=getProto(obj);if(!proto){
				return true;
			}Ctor=hasOwn.call(proto,'constructor')&&proto.constructor;return typeof Ctor==='function'&&fnToString.call(Ctor)===ObjectFunctionString;
		},isEmptyObject:function(obj){
			var name;for(name in obj){
				return false;
			}return true;
		},globalEval:function(code,options,doc){
			DOMEval(code,{nonce:options&&options.nonce},doc);
		},each:function(obj,callback){
			var length,i=0;if(isArrayLike(obj)){
				length=obj.length;for(;i<length;i++){
					if(callback.call(obj[i],i,obj[i])===false){
						break;
					}
				}
			}else{
				for(i in obj){
					if(callback.call(obj[i],i,obj[i])===false){
						break;
					}
				}
			}return obj;
		},makeArray:function(arr,results){
			var ret=results||[];if(arr!=null){
				if(isArrayLike(Object(arr))){
					jQuery.merge(ret,typeof arr==='string'?[arr]:arr);
				}else{
					push.call(ret,arr);
				}
			}return ret;
		},inArray:function(elem,arr,i){
			return arr==null?-1:indexOf.call(arr,elem,i);
		},merge:function(first,second){
			var len=+second.length,j=0,i=first.length;for(;j<len;j++){
				first[i++]=second[j];
			}first.length=i;return first;
		},grep:function(elems,callback,invert){
			var callbackInverse,matches=[],i=0,length=elems.length,callbackExpect=!invert;for(;i<length;i++){
				callbackInverse=!callback(elems[i],i);if(callbackInverse!==callbackExpect){
					matches.push(elems[i]);
				}
			}return matches;
		},map:function(elems,callback,arg){
			var length,value,i=0,ret=[];if(isArrayLike(elems)){
				length=elems.length;for(;i<length;i++){
					value=callback(elems[i],i,arg);if(value!=null){
						ret.push(value);
					}
				}
			}else{
				for(i in elems){
					value=callback(elems[i],i,arg);if(value!=null){
						ret.push(value);
					}
				}
			}return flat(ret);
		},guid:1,support:support});if(typeof Symbol==='function'){
			jQuery.fn[Symbol.iterator]=arr[Symbol.iterator];
		}jQuery.each('Boolean Number String Function Array Date RegExp Object Error Symbol'.split(' '),function(_i,name){
			class2type['[object '+name+']']=name.toLowerCase();
		});function isArrayLike(obj){
			var length=!!obj&&'length'in obj&&obj.length,type=toType(obj);if(isFunction(obj)||isWindow(obj)){
				return false;
			}return type==='array'||length===0||typeof length==='number'&&length>0&&length-1 in obj;
		}var Sizzle=function(window){
			var i,support,Expr,getText,isXML,tokenize,compile,select,outermostContext,sortInput,hasDuplicate,setDocument,document,docElem,documentIsHTML,rbuggyQSA,rbuggyMatches,matches,contains,expando='sizzle'+1*new Date,preferredDoc=window.document,dirruns=0,done=0,classCache=createCache(),tokenCache=createCache(),compilerCache=createCache(),nonnativeSelectorCache=createCache(),sortOrder=function(a,b){
					if(a===b){
						hasDuplicate=true;
					}return 0;
				},hasOwn={}.hasOwnProperty,arr=[],pop=arr.pop,pushNative=arr.push,push=arr.push,slice=arr.slice,indexOf=function(list,elem){
					var i=0,len=list.length;for(;i<len;i++){
						if(list[i]===elem){
							return i;
						}
					}return-1;
				},booleans='checked|selected|async|autofocus|autoplay|controls|defer|disabled|hidden|'+'ismap|loop|multiple|open|readonly|required|scoped',whitespace='[\\x20\\t\\r\\n\\f]',identifier='(?:\\\\[\\da-fA-F]{1,6}'+whitespace+'?|\\\\[^\\r\\n\\f]|[\\w-]|[^\0-\\x7f])+',attributes='\\['+whitespace+'*('+identifier+')(?:'+whitespace+'*([*^$|!~]?=)'+whitespace+'*(?:\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)"|('+identifier+'))|)'+whitespace+'*\\]',pseudos=':('+identifier+')(?:\\(('+'(\'((?:\\\\.|[^\\\\\'])*)\'|"((?:\\\\.|[^\\\\"])*)")|'+'((?:\\\\.|[^\\\\()[\\]]|'+attributes+')*)|'+'.*'+')\\)|)',rwhitespace=new RegExp(whitespace+'+','g'),rtrim=new RegExp('^'+whitespace+'+|((?:^|[^\\\\])(?:\\\\.)*)'+whitespace+'+$','g'),rcomma=new RegExp('^'+whitespace+'*,'+whitespace+'*'),rcombinators=new RegExp('^'+whitespace+'*([>+~]|'+whitespace+')'+whitespace+'*'),rdescend=new RegExp(whitespace+'|>'),rpseudo=new RegExp(pseudos),ridentifier=new RegExp('^'+identifier+'$'),matchExpr={ID:new RegExp('^#('+identifier+')'),CLASS:new RegExp('^\\.('+identifier+')'),TAG:new RegExp('^('+identifier+'|[*])'),ATTR:new RegExp('^'+attributes),PSEUDO:new RegExp('^'+pseudos),CHILD:new RegExp('^:(only|first|last|nth|nth-last)-(child|of-type)(?:\\('+whitespace+'*(even|odd|(([+-]|)(\\d*)n|)'+whitespace+'*(?:([+-]|)'+whitespace+'*(\\d+)|))'+whitespace+'*\\)|)','i'),bool:new RegExp('^(?:'+booleans+')$','i'),needsContext:new RegExp('^'+whitespace+'*[>+~]|:(even|odd|eq|gt|lt|nth|first|last)(?:\\('+whitespace+'*((?:-\\d)?\\d*)'+whitespace+'*\\)|)(?=[^-]|$)','i')},rhtml=/HTML$/i,rinputs=/^(?:input|select|textarea|button)$/i,rheader=/^h\d$/i,rnative=/^[^{]+\{\s*\[native \w/,rquickExpr=/^(?:#([\w-]+)|(\w+)|\.([\w-]+))$/,rsibling=/[+~]/,runescape=new RegExp('\\\\[\\da-fA-F]{1,6}'+whitespace+'?|\\\\([^\\r\\n\\f])','g'),funescape=function(escape,nonHex){
					var high='0x'+escape.slice(1)-65536;return nonHex?nonHex:high<0?String.fromCharCode(high+65536):String.fromCharCode(high>>10|55296,high&1023|56320);
				},rcssescape=/([\0-\x1f\x7f]|^-?\d)|^-$|[^\0-\x1f\x7f-\uFFFF\w-]/g,fcssescape=function(ch,asCodePoint){
					if(asCodePoint){
						if(ch==='\0'){
							return'�';
						}return ch.slice(0,-1)+'\\'+ch.charCodeAt(ch.length-1).toString(16)+' ';
					}return'\\'+ch;
				},unloadHandler=function(){
					setDocument();
				},inDisabledFieldset=addCombinator(function(elem){
					return elem.disabled===true&&elem.nodeName.toLowerCase()==='fieldset';
				},{dir:'parentNode',next:'legend'});try{
				push.apply(arr=slice.call(preferredDoc.childNodes),preferredDoc.childNodes);arr[preferredDoc.childNodes.length].nodeType;
			}catch(e){
				push={apply:arr.length?function(target,els){
					pushNative.apply(target,slice.call(els));
				}:function(target,els){
					var j=target.length,i=0;while(target[j++]=els[i++]){}target.length=j-1;
				}};
			}function Sizzle(selector,context,results,seed){
				var m,i,elem,nid,match,groups,newSelector,newContext=context&&context.ownerDocument,nodeType=context?context.nodeType:9;results=results||[];if(typeof selector!=='string'||!selector||nodeType!==1&&nodeType!==9&&nodeType!==11){
					return results;
				}if(!seed){
					setDocument(context);context=context||document;if(documentIsHTML){
						if(nodeType!==11&&(match=rquickExpr.exec(selector))){
							if(m=match[1]){
								if(nodeType===9){
									if(elem=context.getElementById(m)){
										if(elem.id===m){
											results.push(elem);return results;
										}
									}else{
										return results;
									}
								}else{
									if(newContext&&(elem=newContext.getElementById(m))&&contains(context,elem)&&elem.id===m){
										results.push(elem);return results;
									}
								}
							}else if(match[2]){
								push.apply(results,context.getElementsByTagName(selector));return results;
							}else if((m=match[3])&&support.getElementsByClassName&&context.getElementsByClassName){
								push.apply(results,context.getElementsByClassName(m));return results;
							}
						}if(support.qsa&&!nonnativeSelectorCache[selector+' ']&&(!rbuggyQSA||!rbuggyQSA.test(selector))&&(nodeType!==1||context.nodeName.toLowerCase()!=='object')){
							newSelector=selector;newContext=context;if(nodeType===1&&(rdescend.test(selector)||rcombinators.test(selector))){
								newContext=rsibling.test(selector)&&testContext(context.parentNode)||context;if(newContext!==context||!support.scope){
									if(nid=context.getAttribute('id')){
										nid=nid.replace(rcssescape,fcssescape);
									}else{
										context.setAttribute('id',nid=expando);
									}
								}groups=tokenize(selector);i=groups.length;while(i--){
									groups[i]=(nid?'#'+nid:':scope')+' '+toSelector(groups[i]);
								}newSelector=groups.join(',');
							}try{
								push.apply(results,newContext.querySelectorAll(newSelector));return results;
							}catch(qsaError){
								nonnativeSelectorCache(selector,true);
							}finally{
								if(nid===expando){
									context.removeAttribute('id');
								}
							}
						}
					}
				}return select(selector.replace(rtrim,'$1'),context,results,seed);
			}function createCache(){
				var keys=[];function cache(key,value){
					if(keys.push(key+' ')>Expr.cacheLength){
						delete cache[keys.shift()];
					}return cache[key+' ']=value;
				}return cache;
			}function markFunction(fn){
				fn[expando]=true;return fn;
			}function assert(fn){
				var el=document.createElement('fieldset');try{
					return!!fn(el);
				}catch(e){
					return false;
				}finally{
					if(el.parentNode){
						el.parentNode.removeChild(el);
					}el=null;
				}
			}function addHandle(attrs,handler){
				var arr=attrs.split('|'),i=arr.length;while(i--){
					Expr.attrHandle[arr[i]]=handler;
				}
			}function siblingCheck(a,b){
				var cur=b&&a,diff=cur&&a.nodeType===1&&b.nodeType===1&&a.sourceIndex-b.sourceIndex;if(diff){
					return diff;
				}if(cur){
					while(cur=cur.nextSibling){
						if(cur===b){
							return-1;
						}
					}
				}return a?1:-1;
			}function createInputPseudo(type){
				return function(elem){
					var name=elem.nodeName.toLowerCase();return name==='input'&&elem.type===type;
				};
			}function createButtonPseudo(type){
				return function(elem){
					var name=elem.nodeName.toLowerCase();return(name==='input'||name==='button')&&elem.type===type;
				};
			}function createDisabledPseudo(disabled){
				return function(elem){
					if('form'in elem){
						if(elem.parentNode&&elem.disabled===false){
							if('label'in elem){
								if('label'in elem.parentNode){
									return elem.parentNode.disabled===disabled;
								}else{
									return elem.disabled===disabled;
								}
							}return elem.isDisabled===disabled||elem.isDisabled!==!disabled&&inDisabledFieldset(elem)===disabled;
						}return elem.disabled===disabled;
					}else if('label'in elem){
						return elem.disabled===disabled;
					}return false;
				};
			}function createPositionalPseudo(fn){
				return markFunction(function(argument){
					argument=+argument;return markFunction(function(seed,matches){
						var j,matchIndexes=fn([],seed.length,argument),i=matchIndexes.length;while(i--){
							if(seed[j=matchIndexes[i]]){
								seed[j]=!(matches[j]=seed[j]);
							}
						}
					});
				});
			}function testContext(context){
				return context&&typeof context.getElementsByTagName!=='undefined'&&context;
			}support=Sizzle.support={};isXML=Sizzle.isXML=function(elem){
				var namespace=elem&&elem.namespaceURI,docElem=elem&&(elem.ownerDocument||elem).documentElement;return!rhtml.test(namespace||docElem&&docElem.nodeName||'HTML');
			};setDocument=Sizzle.setDocument=function(node){
				var hasCompare,subWindow,doc=node?node.ownerDocument||node:preferredDoc;if(doc==document||doc.nodeType!==9||!doc.documentElement){
					return document;
				}document=doc;docElem=document.documentElement;documentIsHTML=!isXML(document);if(preferredDoc!=document&&(subWindow=document.defaultView)&&subWindow.top!==subWindow){
					if(subWindow.addEventListener){
						subWindow.addEventListener('unload',unloadHandler,false);
					}else if(subWindow.attachEvent){
						subWindow.attachEvent('onunload',unloadHandler);
					}
				}support.scope=assert(function(el){
					docElem.appendChild(el).appendChild(document.createElement('div'));return typeof el.querySelectorAll!=='undefined'&&!el.querySelectorAll(':scope fieldset div').length;
				});support.attributes=assert(function(el){
					el.className='i';return!el.getAttribute('className');
				});support.getElementsByTagName=assert(function(el){
					el.appendChild(document.createComment(''));return!el.getElementsByTagName('*').length;
				});support.getElementsByClassName=rnative.test(document.getElementsByClassName);support.getById=assert(function(el){
					docElem.appendChild(el).id=expando;return!document.getElementsByName||!document.getElementsByName(expando).length;
				});if(support.getById){
					Expr.filter['ID']=function(id){
						var attrId=id.replace(runescape,funescape);return function(elem){
							return elem.getAttribute('id')===attrId;
						};
					};Expr.find['ID']=function(id,context){
						if(typeof context.getElementById!=='undefined'&&documentIsHTML){
							var elem=context.getElementById(id);return elem?[elem]:[];
						}
					};
				}else{
					Expr.filter['ID']=function(id){
						var attrId=id.replace(runescape,funescape);return function(elem){
							var node=typeof elem.getAttributeNode!=='undefined'&&elem.getAttributeNode('id');return node&&node.value===attrId;
						};
					};Expr.find['ID']=function(id,context){
						if(typeof context.getElementById!=='undefined'&&documentIsHTML){
							var node,i,elems,elem=context.getElementById(id);if(elem){
								node=elem.getAttributeNode('id');if(node&&node.value===id){
									return[elem];
								}elems=context.getElementsByName(id);i=0;while(elem=elems[i++]){
									node=elem.getAttributeNode('id');if(node&&node.value===id){
										return[elem];
									}
								}
							}return[];
						}
					};
				}Expr.find['TAG']=support.getElementsByTagName?function(tag,context){
					if(typeof context.getElementsByTagName!=='undefined'){
						return context.getElementsByTagName(tag);
					}else if(support.qsa){
						return context.querySelectorAll(tag);
					}
				}:function(tag,context){
					var elem,tmp=[],i=0,results=context.getElementsByTagName(tag);if(tag==='*'){
						while(elem=results[i++]){
							if(elem.nodeType===1){
								tmp.push(elem);
							}
						}return tmp;
					}return results;
				};Expr.find['CLASS']=support.getElementsByClassName&&function(className,context){
					if(typeof context.getElementsByClassName!=='undefined'&&documentIsHTML){
						return context.getElementsByClassName(className);
					}
				};rbuggyMatches=[];rbuggyQSA=[];if(support.qsa=rnative.test(document.querySelectorAll)){
					assert(function(el){
						var input;docElem.appendChild(el).innerHTML='<a id=\''+expando+'\'></a>'+'<select id=\''+expando+'-\r\\\' msallowcapture=\'\'>'+'<option selected=\'\'></option></select>';if(el.querySelectorAll('[msallowcapture^=\'\']').length){
							rbuggyQSA.push('[*^$]='+whitespace+'*(?:\'\'|"")');
						}if(!el.querySelectorAll('[selected]').length){
							rbuggyQSA.push('\\['+whitespace+'*(?:value|'+booleans+')');
						}if(!el.querySelectorAll('[id~='+expando+'-]').length){
							rbuggyQSA.push('~=');
						}input=document.createElement('input');input.setAttribute('name','');el.appendChild(input);if(!el.querySelectorAll('[name=\'\']').length){
							rbuggyQSA.push('\\['+whitespace+'*name'+whitespace+'*='+whitespace+'*(?:\'\'|"")');
						}if(!el.querySelectorAll(':checked').length){
							rbuggyQSA.push(':checked');
						}if(!el.querySelectorAll('a#'+expando+'+*').length){
							rbuggyQSA.push('.#.+[+~]');
						}el.querySelectorAll('\\\f');rbuggyQSA.push('[\\r\\n\\f]');
					});assert(function(el){
						el.innerHTML='<a href=\'\' disabled=\'disabled\'></a>'+'<select disabled=\'disabled\'><option/></select>';var input=document.createElement('input');input.setAttribute('type','hidden');el.appendChild(input).setAttribute('name','D');if(el.querySelectorAll('[name=d]').length){
							rbuggyQSA.push('name'+whitespace+'*[*^$|!~]?=');
						}if(el.querySelectorAll(':enabled').length!==2){
							rbuggyQSA.push(':enabled',':disabled');
						}docElem.appendChild(el).disabled=true;if(el.querySelectorAll(':disabled').length!==2){
							rbuggyQSA.push(':enabled',':disabled');
						}el.querySelectorAll('*,:x');rbuggyQSA.push(',.*:');
					});
				}if(support.matchesSelector=rnative.test(matches=docElem.matches||docElem.webkitMatchesSelector||docElem.mozMatchesSelector||docElem.oMatchesSelector||docElem.msMatchesSelector)){
					assert(function(el){
						support.disconnectedMatch=matches.call(el,'*');matches.call(el,'[s!=\'\']:x');rbuggyMatches.push('!=',pseudos);
					});
				}rbuggyQSA=rbuggyQSA.length&&new RegExp(rbuggyQSA.join('|'));rbuggyMatches=rbuggyMatches.length&&new RegExp(rbuggyMatches.join('|'));hasCompare=rnative.test(docElem.compareDocumentPosition);contains=hasCompare||rnative.test(docElem.contains)?function(a,b){
					var adown=a.nodeType===9?a.documentElement:a,bup=b&&b.parentNode;return a===bup||!!(bup&&bup.nodeType===1&&(adown.contains?adown.contains(bup):a.compareDocumentPosition&&a.compareDocumentPosition(bup)&16));
				}:function(a,b){
					if(b){
						while(b=b.parentNode){
							if(b===a){
								return true;
							}
						}
					}return false;
				};sortOrder=hasCompare?function(a,b){
					if(a===b){
						hasDuplicate=true;return 0;
					}var compare=!a.compareDocumentPosition-!b.compareDocumentPosition;if(compare){
						return compare;
					}compare=(a.ownerDocument||a)==(b.ownerDocument||b)?a.compareDocumentPosition(b):1;if(compare&1||!support.sortDetached&&b.compareDocumentPosition(a)===compare){
						if(a==document||a.ownerDocument==preferredDoc&&contains(preferredDoc,a)){
							return-1;
						}if(b==document||b.ownerDocument==preferredDoc&&contains(preferredDoc,b)){
							return 1;
						}return sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;
					}return compare&4?-1:1;
				}:function(a,b){
					if(a===b){
						hasDuplicate=true;return 0;
					}var cur,i=0,aup=a.parentNode,bup=b.parentNode,ap=[a],bp=[b];if(!aup||!bup){
						return a==document?-1:b==document?1:aup?-1:bup?1:sortInput?indexOf(sortInput,a)-indexOf(sortInput,b):0;
					}else if(aup===bup){
						return siblingCheck(a,b);
					}cur=a;while(cur=cur.parentNode){
						ap.unshift(cur);
					}cur=b;while(cur=cur.parentNode){
						bp.unshift(cur);
					}while(ap[i]===bp[i]){
						i++;
					}return i?siblingCheck(ap[i],bp[i]):ap[i]==preferredDoc?-1:bp[i]==preferredDoc?1:0;
				};return document;
			};Sizzle.matches=function(expr,elements){
				return Sizzle(expr,null,null,elements);
			};Sizzle.matchesSelector=function(elem,expr){
				setDocument(elem);if(support.matchesSelector&&documentIsHTML&&!nonnativeSelectorCache[expr+' ']&&(!rbuggyMatches||!rbuggyMatches.test(expr))&&(!rbuggyQSA||!rbuggyQSA.test(expr))){
					try{
						var ret=matches.call(elem,expr);if(ret||support.disconnectedMatch||elem.document&&elem.document.nodeType!==11){
							return ret;
						}
					}catch(e){
						nonnativeSelectorCache(expr,true);
					}
				}return Sizzle(expr,document,null,[elem]).length>0;
			};Sizzle.contains=function(context,elem){
				if((context.ownerDocument||context)!=document){
					setDocument(context);
				}return contains(context,elem);
			};Sizzle.attr=function(elem,name){
				if((elem.ownerDocument||elem)!=document){
					setDocument(elem);
				}var fn=Expr.attrHandle[name.toLowerCase()],val=fn&&hasOwn.call(Expr.attrHandle,name.toLowerCase())?fn(elem,name,!documentIsHTML):undefined;return val!==undefined?val:support.attributes||!documentIsHTML?elem.getAttribute(name):(val=elem.getAttributeNode(name))&&val.specified?val.value:null;
			};Sizzle.escape=function(sel){
				return(sel+'').replace(rcssescape,fcssescape);
			};Sizzle.error=function(msg){
				throw new Error('Syntax error, unrecognized expression: '+msg);
			};Sizzle.uniqueSort=function(results){
				var elem,duplicates=[],j=0,i=0;hasDuplicate=!support.detectDuplicates;sortInput=!support.sortStable&&results.slice(0);results.sort(sortOrder);if(hasDuplicate){
					while(elem=results[i++]){
						if(elem===results[i]){
							j=duplicates.push(i);
						}
					}while(j--){
						results.splice(duplicates[j],1);
					}
				}sortInput=null;return results;
			};getText=Sizzle.getText=function(elem){
				var node,ret='',i=0,nodeType=elem.nodeType;if(!nodeType){
					while(node=elem[i++]){
						ret+=getText(node);
					}
				}else if(nodeType===1||nodeType===9||nodeType===11){
					if(typeof elem.textContent==='string'){
						return elem.textContent;
					}else{
						for(elem=elem.firstChild;elem;elem=elem.nextSibling){
							ret+=getText(elem);
						}
					}
				}else if(nodeType===3||nodeType===4){
					return elem.nodeValue;
				}return ret;
			};Expr=Sizzle.selectors={cacheLength:50,createPseudo:markFunction,match:matchExpr,attrHandle:{},find:{},relative:{'>':{dir:'parentNode',first:true},' ':{dir:'parentNode'},'+':{dir:'previousSibling',first:true},'~':{dir:'previousSibling'}},preFilter:{ATTR:function(match){
				match[1]=match[1].replace(runescape,funescape);match[3]=(match[3]||match[4]||match[5]||'').replace(runescape,funescape);if(match[2]==='~='){
					match[3]=' '+match[3]+' ';
				}return match.slice(0,4);
			},CHILD:function(match){
				match[1]=match[1].toLowerCase();if(match[1].slice(0,3)==='nth'){
					if(!match[3]){
						Sizzle.error(match[0]);
					}match[4]=+(match[4]?match[5]+(match[6]||1):2*(match[3]==='even'||match[3]==='odd'));match[5]=+(match[7]+match[8]||match[3]==='odd');
				}else if(match[3]){
					Sizzle.error(match[0]);
				}return match;
			},PSEUDO:function(match){
				var excess,unquoted=!match[6]&&match[2];if(matchExpr['CHILD'].test(match[0])){
					return null;
				}if(match[3]){
					match[2]=match[4]||match[5]||'';
				}else if(unquoted&&rpseudo.test(unquoted)&&(excess=tokenize(unquoted,true))&&(excess=unquoted.indexOf(')',unquoted.length-excess)-unquoted.length)){
					match[0]=match[0].slice(0,excess);match[2]=unquoted.slice(0,excess);
				}return match.slice(0,3);
			}},filter:{TAG:function(nodeNameSelector){
				var nodeName=nodeNameSelector.replace(runescape,funescape).toLowerCase();return nodeNameSelector==='*'?function(){
					return true;
				}:function(elem){
					return elem.nodeName&&elem.nodeName.toLowerCase()===nodeName;
				};
			},CLASS:function(className){
				var pattern=classCache[className+' '];return pattern||(pattern=new RegExp('(^|'+whitespace+')'+className+'('+whitespace+'|$)'))&&classCache(className,function(elem){
					return pattern.test(typeof elem.className==='string'&&elem.className||typeof elem.getAttribute!=='undefined'&&elem.getAttribute('class')||'');
				});
			},ATTR:function(name,operator,check){
				return function(elem){
					var result=Sizzle.attr(elem,name);if(result==null){
						return operator==='!=';
					}if(!operator){
						return true;
					}result+='';return operator==='='?result===check:operator==='!='?result!==check:operator==='^='?check&&result.indexOf(check)===0:operator==='*='?check&&result.indexOf(check)>-1:operator==='$='?check&&result.slice(-check.length)===check:operator==='~='?(' '+result.replace(rwhitespace,' ')+' ').indexOf(check)>-1:operator==='|='?result===check||result.slice(0,check.length+1)===check+'-':false;
				};
			},CHILD:function(type,what,_argument,first,last){
				var simple=type.slice(0,3)!=='nth',forward=type.slice(-4)!=='last',ofType=what==='of-type';return first===1&&last===0?function(elem){
					return!!elem.parentNode;
				}:function(elem,_context,xml){
					var cache,uniqueCache,outerCache,node,nodeIndex,start,dir=simple!==forward?'nextSibling':'previousSibling',parent=elem.parentNode,name=ofType&&elem.nodeName.toLowerCase(),useCache=!xml&&!ofType,diff=false;if(parent){
						if(simple){
							while(dir){
								node=elem;while(node=node[dir]){
									if(ofType?node.nodeName.toLowerCase()===name:node.nodeType===1){
										return false;
									}
								}start=dir=type==='only'&&!start&&'nextSibling';
							}return true;
						}start=[forward?parent.firstChild:parent.lastChild];if(forward&&useCache){
							node=parent;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex&&cache[2];node=nodeIndex&&parent.childNodes[nodeIndex];while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){
								if(node.nodeType===1&&++diff&&node===elem){
									uniqueCache[type]=[dirruns,nodeIndex,diff];break;
								}
							}
						}else{
							if(useCache){
								node=elem;outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});cache=uniqueCache[type]||[];nodeIndex=cache[0]===dirruns&&cache[1];diff=nodeIndex;
							}if(diff===false){
								while(node=++nodeIndex&&node&&node[dir]||(diff=nodeIndex=0)||start.pop()){
									if((ofType?node.nodeName.toLowerCase()===name:node.nodeType===1)&&++diff){
										if(useCache){
											outerCache=node[expando]||(node[expando]={});uniqueCache=outerCache[node.uniqueID]||(outerCache[node.uniqueID]={});uniqueCache[type]=[dirruns,diff];
										}if(node===elem){
											break;
										}
									}
								}
							}
						}diff-=last;return diff===first||diff%first===0&&diff/first>=0;
					}
				};
			},PSEUDO:function(pseudo,argument){
				var args,fn=Expr.pseudos[pseudo]||Expr.setFilters[pseudo.toLowerCase()]||Sizzle.error('unsupported pseudo: '+pseudo);if(fn[expando]){
					return fn(argument);
				}if(fn.length>1){
					args=[pseudo,pseudo,'',argument];return Expr.setFilters.hasOwnProperty(pseudo.toLowerCase())?markFunction(function(seed,matches){
						var idx,matched=fn(seed,argument),i=matched.length;while(i--){
							idx=indexOf(seed,matched[i]);seed[idx]=!(matches[idx]=matched[i]);
						}
					}):function(elem){
						return fn(elem,0,args);
					};
				}return fn;
			}},pseudos:{not:markFunction(function(selector){
				var input=[],results=[],matcher=compile(selector.replace(rtrim,'$1'));return matcher[expando]?markFunction(function(seed,matches,_context,xml){
					var elem,unmatched=matcher(seed,null,xml,[]),i=seed.length;while(i--){
						if(elem=unmatched[i]){
							seed[i]=!(matches[i]=elem);
						}
					}
				}):function(elem,_context,xml){
					input[0]=elem;matcher(input,null,xml,results);input[0]=null;return!results.pop();
				};
			}),has:markFunction(function(selector){
				return function(elem){
					return Sizzle(selector,elem).length>0;
				};
			}),contains:markFunction(function(text){
				text=text.replace(runescape,funescape);return function(elem){
					return(elem.textContent||getText(elem)).indexOf(text)>-1;
				};
			}),lang:markFunction(function(lang){
				if(!ridentifier.test(lang||'')){
					Sizzle.error('unsupported lang: '+lang);
				}lang=lang.replace(runescape,funescape).toLowerCase();return function(elem){
					var elemLang;do{
						if(elemLang=documentIsHTML?elem.lang:elem.getAttribute('xml:lang')||elem.getAttribute('lang')){
							elemLang=elemLang.toLowerCase();return elemLang===lang||elemLang.indexOf(lang+'-')===0;
						}
					}while((elem=elem.parentNode)&&elem.nodeType===1);return false;
				};
			}),target:function(elem){
				var hash=window.location&&window.location.hash;return hash&&hash.slice(1)===elem.id;
			},root:function(elem){
				return elem===docElem;
			},focus:function(elem){
				return elem===document.activeElement&&(!document.hasFocus||document.hasFocus())&&!!(elem.type||elem.href||~elem.tabIndex);
			},enabled:createDisabledPseudo(false),disabled:createDisabledPseudo(true),checked:function(elem){
				var nodeName=elem.nodeName.toLowerCase();return nodeName==='input'&&!!elem.checked||nodeName==='option'&&!!elem.selected;
			},selected:function(elem){
				if(elem.parentNode){
					elem.parentNode.selectedIndex;
				}return elem.selected===true;
			},empty:function(elem){
				for(elem=elem.firstChild;elem;elem=elem.nextSibling){
					if(elem.nodeType<6){
						return false;
					}
				}return true;
			},parent:function(elem){
				return!Expr.pseudos['empty'](elem);
			},header:function(elem){
				return rheader.test(elem.nodeName);
			},input:function(elem){
				return rinputs.test(elem.nodeName);
			},button:function(elem){
				var name=elem.nodeName.toLowerCase();return name==='input'&&elem.type==='button'||name==='button';
			},text:function(elem){
				var attr;return elem.nodeName.toLowerCase()==='input'&&elem.type==='text'&&((attr=elem.getAttribute('type'))==null||attr.toLowerCase()==='text');
			},first:createPositionalPseudo(function(){
				return[0];
			}),last:createPositionalPseudo(function(_matchIndexes,length){
				return[length-1];
			}),eq:createPositionalPseudo(function(_matchIndexes,length,argument){
				return[argument<0?argument+length:argument];
			}),even:createPositionalPseudo(function(matchIndexes,length){
				var i=0;for(;i<length;i+=2){
					matchIndexes.push(i);
				}return matchIndexes;
			}),odd:createPositionalPseudo(function(matchIndexes,length){
				var i=1;for(;i<length;i+=2){
					matchIndexes.push(i);
				}return matchIndexes;
			}),lt:createPositionalPseudo(function(matchIndexes,length,argument){
				var i=argument<0?argument+length:argument>length?length:argument;for(;--i>=0;){
					matchIndexes.push(i);
				}return matchIndexes;
			}),gt:createPositionalPseudo(function(matchIndexes,length,argument){
				var i=argument<0?argument+length:argument;for(;++i<length;){
					matchIndexes.push(i);
				}return matchIndexes;
			})}};Expr.pseudos['nth']=Expr.pseudos['eq'];for(i in{radio:true,checkbox:true,file:true,password:true,image:true}){
				Expr.pseudos[i]=createInputPseudo(i);
			}for(i in{submit:true,reset:true}){
				Expr.pseudos[i]=createButtonPseudo(i);
			}function setFilters(){}setFilters.prototype=Expr.filters=Expr.pseudos;Expr.setFilters=new setFilters;tokenize=Sizzle.tokenize=function(selector,parseOnly){
				var matched,match,tokens,type,soFar,groups,preFilters,cached=tokenCache[selector+' '];if(cached){
					return parseOnly?0:cached.slice(0);
				}soFar=selector;groups=[];preFilters=Expr.preFilter;while(soFar){
					if(!matched||(match=rcomma.exec(soFar))){
						if(match){
							soFar=soFar.slice(match[0].length)||soFar;
						}groups.push(tokens=[]);
					}matched=false;if(match=rcombinators.exec(soFar)){
						matched=match.shift();tokens.push({value:matched,type:match[0].replace(rtrim,' ')});soFar=soFar.slice(matched.length);
					}for(type in Expr.filter){
						if((match=matchExpr[type].exec(soFar))&&(!preFilters[type]||(match=preFilters[type](match)))){
							matched=match.shift();tokens.push({value:matched,type:type,matches:match});soFar=soFar.slice(matched.length);
						}
					}if(!matched){
						break;
					}
				}return parseOnly?soFar.length:soFar?Sizzle.error(selector):tokenCache(selector,groups).slice(0);
			};function toSelector(tokens){
				var i=0,len=tokens.length,selector='';for(;i<len;i++){
					selector+=tokens[i].value;
				}return selector;
			}function addCombinator(matcher,combinator,base){
				var dir=combinator.dir,skip=combinator.next,key=skip||dir,checkNonElements=base&&key==='parentNode',doneName=done++;return combinator.first?function(elem,context,xml){
					while(elem=elem[dir]){
						if(elem.nodeType===1||checkNonElements){
							return matcher(elem,context,xml);
						}
					}return false;
				}:function(elem,context,xml){
					var oldCache,uniqueCache,outerCache,newCache=[dirruns,doneName];if(xml){
						while(elem=elem[dir]){
							if(elem.nodeType===1||checkNonElements){
								if(matcher(elem,context,xml)){
									return true;
								}
							}
						}
					}else{
						while(elem=elem[dir]){
							if(elem.nodeType===1||checkNonElements){
								outerCache=elem[expando]||(elem[expando]={});uniqueCache=outerCache[elem.uniqueID]||(outerCache[elem.uniqueID]={});if(skip&&skip===elem.nodeName.toLowerCase()){
									elem=elem[dir]||elem;
								}else if((oldCache=uniqueCache[key])&&oldCache[0]===dirruns&&oldCache[1]===doneName){
									return newCache[2]=oldCache[2];
								}else{
									uniqueCache[key]=newCache;if(newCache[2]=matcher(elem,context,xml)){
										return true;
									}
								}
							}
						}
					}return false;
				};
			}function elementMatcher(matchers){
				return matchers.length>1?function(elem,context,xml){
					var i=matchers.length;while(i--){
						if(!matchers[i](elem,context,xml)){
							return false;
						}
					}return true;
				}:matchers[0];
			}function multipleContexts(selector,contexts,results){
				var i=0,len=contexts.length;for(;i<len;i++){
					Sizzle(selector,contexts[i],results);
				}return results;
			}function condense(unmatched,map,filter,context,xml){
				var elem,newUnmatched=[],i=0,len=unmatched.length,mapped=map!=null;for(;i<len;i++){
					if(elem=unmatched[i]){
						if(!filter||filter(elem,context,xml)){
							newUnmatched.push(elem);if(mapped){
								map.push(i);
							}
						}
					}
				}return newUnmatched;
			}function setMatcher(preFilter,selector,matcher,postFilter,postFinder,postSelector){
				if(postFilter&&!postFilter[expando]){
					postFilter=setMatcher(postFilter);
				}if(postFinder&&!postFinder[expando]){
					postFinder=setMatcher(postFinder,postSelector);
				}return markFunction(function(seed,results,context,xml){
					var temp,i,elem,preMap=[],postMap=[],preexisting=results.length,elems=seed||multipleContexts(selector||'*',context.nodeType?[context]:context,[]),matcherIn=preFilter&&(seed||!selector)?condense(elems,preMap,preFilter,context,xml):elems,matcherOut=matcher?postFinder||(seed?preFilter:preexisting||postFilter)?[]:results:matcherIn;if(matcher){
						matcher(matcherIn,matcherOut,context,xml);
					}if(postFilter){
						temp=condense(matcherOut,postMap);postFilter(temp,[],context,xml);i=temp.length;while(i--){
							if(elem=temp[i]){
								matcherOut[postMap[i]]=!(matcherIn[postMap[i]]=elem);
							}
						}
					}if(seed){
						if(postFinder||preFilter){
							if(postFinder){
								temp=[];i=matcherOut.length;while(i--){
									if(elem=matcherOut[i]){
										temp.push(matcherIn[i]=elem);
									}
								}postFinder(null,matcherOut=[],temp,xml);
							}i=matcherOut.length;while(i--){
								if((elem=matcherOut[i])&&(temp=postFinder?indexOf(seed,elem):preMap[i])>-1){
									seed[temp]=!(results[temp]=elem);
								}
							}
						}
					}else{
						matcherOut=condense(matcherOut===results?matcherOut.splice(preexisting,matcherOut.length):matcherOut);if(postFinder){
							postFinder(null,results,matcherOut,xml);
						}else{
							push.apply(results,matcherOut);
						}
					}
				});
			}function matcherFromTokens(tokens){
				var checkContext,matcher,j,len=tokens.length,leadingRelative=Expr.relative[tokens[0].type],implicitRelative=leadingRelative||Expr.relative[' '],i=leadingRelative?1:0,matchContext=addCombinator(function(elem){
						return elem===checkContext;
					},implicitRelative,true),matchAnyContext=addCombinator(function(elem){
						return indexOf(checkContext,elem)>-1;
					},implicitRelative,true),matchers=[function(elem,context,xml){
						var ret=!leadingRelative&&(xml||context!==outermostContext)||((checkContext=context).nodeType?matchContext(elem,context,xml):matchAnyContext(elem,context,xml));checkContext=null;return ret;
					}];for(;i<len;i++){
					if(matcher=Expr.relative[tokens[i].type]){
						matchers=[addCombinator(elementMatcher(matchers),matcher)];
					}else{
						matcher=Expr.filter[tokens[i].type].apply(null,tokens[i].matches);if(matcher[expando]){
							j=++i;for(;j<len;j++){
								if(Expr.relative[tokens[j].type]){
									break;
								}
							}return setMatcher(i>1&&elementMatcher(matchers),i>1&&toSelector(tokens.slice(0,i-1).concat({value:tokens[i-2].type===' '?'*':''})).replace(rtrim,'$1'),matcher,i<j&&matcherFromTokens(tokens.slice(i,j)),j<len&&matcherFromTokens(tokens=tokens.slice(j)),j<len&&toSelector(tokens));
						}matchers.push(matcher);
					}
				}return elementMatcher(matchers);
			}function matcherFromGroupMatchers(elementMatchers,setMatchers){
				var bySet=setMatchers.length>0,byElement=elementMatchers.length>0,superMatcher=function(seed,context,xml,results,outermost){
					var elem,j,matcher,matchedCount=0,i='0',unmatched=seed&&[],setMatched=[],contextBackup=outermostContext,elems=seed||byElement&&Expr.find['TAG']('*',outermost),dirrunsUnique=dirruns+=contextBackup==null?1:Math.random()||.1,len=elems.length;if(outermost){
						outermostContext=context==document||context||outermost;
					}for(;i!==len&&(elem=elems[i])!=null;i++){
						if(byElement&&elem){
							j=0;if(!context&&elem.ownerDocument!=document){
								setDocument(elem);xml=!documentIsHTML;
							}while(matcher=elementMatchers[j++]){
								if(matcher(elem,context||document,xml)){
									results.push(elem);break;
								}
							}if(outermost){
								dirruns=dirrunsUnique;
							}
						}if(bySet){
							if(elem=!matcher&&elem){
								matchedCount--;
							}if(seed){
								unmatched.push(elem);
							}
						}
					}matchedCount+=i;if(bySet&&i!==matchedCount){
						j=0;while(matcher=setMatchers[j++]){
							matcher(unmatched,setMatched,context,xml);
						}if(seed){
							if(matchedCount>0){
								while(i--){
									if(!(unmatched[i]||setMatched[i])){
										setMatched[i]=pop.call(results);
									}
								}
							}setMatched=condense(setMatched);
						}push.apply(results,setMatched);if(outermost&&!seed&&setMatched.length>0&&matchedCount+setMatchers.length>1){
							Sizzle.uniqueSort(results);
						}
					}if(outermost){
						dirruns=dirrunsUnique;outermostContext=contextBackup;
					}return unmatched;
				};return bySet?markFunction(superMatcher):superMatcher;
			}compile=Sizzle.compile=function(selector,match){
				var i,setMatchers=[],elementMatchers=[],cached=compilerCache[selector+' '];if(!cached){
					if(!match){
						match=tokenize(selector);
					}i=match.length;while(i--){
						cached=matcherFromTokens(match[i]);if(cached[expando]){
							setMatchers.push(cached);
						}else{
							elementMatchers.push(cached);
						}
					}cached=compilerCache(selector,matcherFromGroupMatchers(elementMatchers,setMatchers));cached.selector=selector;
				}return cached;
			};select=Sizzle.select=function(selector,context,results,seed){
				var i,tokens,token,type,find,compiled=typeof selector==='function'&&selector,match=!seed&&tokenize(selector=compiled.selector||selector);results=results||[];if(match.length===1){
					tokens=match[0]=match[0].slice(0);if(tokens.length>2&&(token=tokens[0]).type==='ID'&&context.nodeType===9&&documentIsHTML&&Expr.relative[tokens[1].type]){
						context=(Expr.find['ID'](token.matches[0].replace(runescape,funescape),context)||[])[0];if(!context){
							return results;
						}else if(compiled){
							context=context.parentNode;
						}selector=selector.slice(tokens.shift().value.length);
					}i=matchExpr['needsContext'].test(selector)?0:tokens.length;while(i--){
						token=tokens[i];if(Expr.relative[type=token.type]){
							break;
						}if(find=Expr.find[type]){
							if(seed=find(token.matches[0].replace(runescape,funescape),rsibling.test(tokens[0].type)&&testContext(context.parentNode)||context)){
								tokens.splice(i,1);selector=seed.length&&toSelector(tokens);if(!selector){
									push.apply(results,seed);return results;
								}break;
							}
						}
					}
				}(compiled||compile(selector,match))(seed,context,!documentIsHTML,results,!context||rsibling.test(selector)&&testContext(context.parentNode)||context);return results;
			};support.sortStable=expando.split('').sort(sortOrder).join('')===expando;support.detectDuplicates=!!hasDuplicate;setDocument();support.sortDetached=assert(function(el){
				return el.compareDocumentPosition(document.createElement('fieldset'))&1;
			});if(!assert(function(el){
				el.innerHTML='<a href=\'#\'></a>';return el.firstChild.getAttribute('href')==='#';
			})){
				addHandle('type|href|height|width',function(elem,name,isXML){
					if(!isXML){
						return elem.getAttribute(name,name.toLowerCase()==='type'?1:2);
					}
				});
			}if(!support.attributes||!assert(function(el){
				el.innerHTML='<input/>';el.firstChild.setAttribute('value','');return el.firstChild.getAttribute('value')==='';
			})){
				addHandle('value',function(elem,_name,isXML){
					if(!isXML&&elem.nodeName.toLowerCase()==='input'){
						return elem.defaultValue;
					}
				});
			}if(!assert(function(el){
				return el.getAttribute('disabled')==null;
			})){
				addHandle(booleans,function(elem,name,isXML){
					var val;if(!isXML){
						return elem[name]===true?name.toLowerCase():(val=elem.getAttributeNode(name))&&val.specified?val.value:null;
					}
				});
			}return Sizzle;
		}(window);jQuery.find=Sizzle;jQuery.expr=Sizzle.selectors;jQuery.expr[':']=jQuery.expr.pseudos;jQuery.uniqueSort=jQuery.unique=Sizzle.uniqueSort;jQuery.text=Sizzle.getText;jQuery.isXMLDoc=Sizzle.isXML;jQuery.contains=Sizzle.contains;jQuery.escapeSelector=Sizzle.escape;var dir=function(elem,dir,until){
			var matched=[],truncate=until!==undefined;while((elem=elem[dir])&&elem.nodeType!==9){
				if(elem.nodeType===1){
					if(truncate&&jQuery(elem).is(until)){
						break;
					}matched.push(elem);
				}
			}return matched;
		};var siblings=function(n,elem){
			var matched=[];for(;n;n=n.nextSibling){
				if(n.nodeType===1&&n!==elem){
					matched.push(n);
				}
			}return matched;
		};var rneedsContext=jQuery.expr.match.needsContext;function nodeName(elem,name){
			return elem.nodeName&&elem.nodeName.toLowerCase()===name.toLowerCase();
		}var rsingleTag=/^<([a-z][^\/\0>:\x20\t\r\n\f]*)[\x20\t\r\n\f]*\/?>(?:<\/\1>|)$/i;function winnow(elements,qualifier,not){
			if(isFunction(qualifier)){
				return jQuery.grep(elements,function(elem,i){
					return!!qualifier.call(elem,i,elem)!==not;
				});
			}if(qualifier.nodeType){
				return jQuery.grep(elements,function(elem){
					return elem===qualifier!==not;
				});
			}if(typeof qualifier!=='string'){
				return jQuery.grep(elements,function(elem){
					return indexOf.call(qualifier,elem)>-1!==not;
				});
			}return jQuery.filter(qualifier,elements,not);
		}jQuery.filter=function(expr,elems,not){
			var elem=elems[0];if(not){
				expr=':not('+expr+')';
			}if(elems.length===1&&elem.nodeType===1){
				return jQuery.find.matchesSelector(elem,expr)?[elem]:[];
			}return jQuery.find.matches(expr,jQuery.grep(elems,function(elem){
				return elem.nodeType===1;
			}));
		};jQuery.fn.extend({find:function(selector){
			var i,ret,len=this.length,self=this;if(typeof selector!=='string'){
				return this.pushStack(jQuery(selector).filter(function(){
					for(i=0;i<len;i++){
						if(jQuery.contains(self[i],this)){
							return true;
						}
					}
				}));
			}ret=this.pushStack([]);for(i=0;i<len;i++){
				jQuery.find(selector,self[i],ret);
			}return len>1?jQuery.uniqueSort(ret):ret;
		},filter:function(selector){
			return this.pushStack(winnow(this,selector||[],false));
		},not:function(selector){
			return this.pushStack(winnow(this,selector||[],true));
		},is:function(selector){
			return!!winnow(this,typeof selector==='string'&&rneedsContext.test(selector)?jQuery(selector):selector||[],false).length;
		}});var rootjQuery,rquickExpr=/^(?:\s*(<[\w\W]+>)[^>]*|#([\w-]+))$/,init=jQuery.fn.init=function(selector,context,root){
			var match,elem;if(!selector){
				return this;
			}root=root||rootjQuery;if(typeof selector==='string'){
				if(selector[0]==='<'&&selector[selector.length-1]==='>'&&selector.length>=3){
					match=[null,selector,null];
				}else{
					match=rquickExpr.exec(selector);
				}if(match&&(match[1]||!context)){
					if(match[1]){
						context=context instanceof jQuery?context[0]:context;jQuery.merge(this,jQuery.parseHTML(match[1],context&&context.nodeType?context.ownerDocument||context:document,true));if(rsingleTag.test(match[1])&&jQuery.isPlainObject(context)){
							for(match in context){
								if(isFunction(this[match])){
									this[match](context[match]);
								}else{
									this.attr(match,context[match]);
								}
							}
						}return this;
					}else{
						elem=document.getElementById(match[2]);if(elem){
							this[0]=elem;this.length=1;
						}return this;
					}
				}else if(!context||context.jquery){
					return(context||root).find(selector);
				}else{
					return this.constructor(context).find(selector);
				}
			}else if(selector.nodeType){
				this[0]=selector;this.length=1;return this;
			}else if(isFunction(selector)){
				return root.ready!==undefined?root.ready(selector):selector(jQuery);
			}return jQuery.makeArray(selector,this);
		};init.prototype=jQuery.fn;rootjQuery=jQuery(document);var rparentsprev=/^(?:parents|prev(?:Until|All))/,guaranteedUnique={children:true,contents:true,next:true,prev:true};jQuery.fn.extend({has:function(target){
			var targets=jQuery(target,this),l=targets.length;return this.filter(function(){
				var i=0;for(;i<l;i++){
					if(jQuery.contains(this,targets[i])){
						return true;
					}
				}
			});
		},closest:function(selectors,context){
			var cur,i=0,l=this.length,matched=[],targets=typeof selectors!=='string'&&jQuery(selectors);if(!rneedsContext.test(selectors)){
				for(;i<l;i++){
					for(cur=this[i];cur&&cur!==context;cur=cur.parentNode){
						if(cur.nodeType<11&&(targets?targets.index(cur)>-1:cur.nodeType===1&&jQuery.find.matchesSelector(cur,selectors))){
							matched.push(cur);break;
						}
					}
				}
			}return this.pushStack(matched.length>1?jQuery.uniqueSort(matched):matched);
		},index:function(elem){
			if(!elem){
				return this[0]&&this[0].parentNode?this.first().prevAll().length:-1;
			}if(typeof elem==='string'){
				return indexOf.call(jQuery(elem),this[0]);
			}return indexOf.call(this,elem.jquery?elem[0]:elem);
		},add:function(selector,context){
			return this.pushStack(jQuery.uniqueSort(jQuery.merge(this.get(),jQuery(selector,context))));
		},addBack:function(selector){
			return this.add(selector==null?this.prevObject:this.prevObject.filter(selector));
		}});function sibling(cur,dir){
			while((cur=cur[dir])&&cur.nodeType!==1){}return cur;
		}jQuery.each({parent:function(elem){
			var parent=elem.parentNode;return parent&&parent.nodeType!==11?parent:null;
		},parents:function(elem){
			return dir(elem,'parentNode');
		},parentsUntil:function(elem,_i,until){
			return dir(elem,'parentNode',until);
		},next:function(elem){
			return sibling(elem,'nextSibling');
		},prev:function(elem){
			return sibling(elem,'previousSibling');
		},nextAll:function(elem){
			return dir(elem,'nextSibling');
		},prevAll:function(elem){
			return dir(elem,'previousSibling');
		},nextUntil:function(elem,_i,until){
			return dir(elem,'nextSibling',until);
		},prevUntil:function(elem,_i,until){
			return dir(elem,'previousSibling',until);
		},siblings:function(elem){
			return siblings((elem.parentNode||{}).firstChild,elem);
		},children:function(elem){
			return siblings(elem.firstChild);
		},contents:function(elem){
			if(elem.contentDocument!=null&&getProto(elem.contentDocument)){
				return elem.contentDocument;
			}if(nodeName(elem,'template')){
				elem=elem.content||elem;
			}return jQuery.merge([],elem.childNodes);
		}},function(name,fn){
			jQuery.fn[name]=function(until,selector){
				var matched=jQuery.map(this,fn,until);if(name.slice(-5)!=='Until'){
					selector=until;
				}if(selector&&typeof selector==='string'){
					matched=jQuery.filter(selector,matched);
				}if(this.length>1){
					if(!guaranteedUnique[name]){
						jQuery.uniqueSort(matched);
					}if(rparentsprev.test(name)){
						matched.reverse();
					}
				}return this.pushStack(matched);
			};
		});var rnothtmlwhite=/[^\x20\t\r\n\f]+/g;function createOptions(options){
			var object={};jQuery.each(options.match(rnothtmlwhite)||[],function(_,flag){
				object[flag]=true;
			});return object;
		}jQuery.Callbacks=function(options){
			options=typeof options==='string'?createOptions(options):jQuery.extend({},options);var firing,memory,fired,locked,list=[],queue=[],firingIndex=-1,fire=function(){
					locked=locked||options.once;fired=firing=true;for(;queue.length;firingIndex=-1){
						memory=queue.shift();while(++firingIndex<list.length){
							if(list[firingIndex].apply(memory[0],memory[1])===false&&options.stopOnFalse){
								firingIndex=list.length;memory=false;
							}
						}
					}if(!options.memory){
						memory=false;
					}firing=false;if(locked){
						if(memory){
							list=[];
						}else{
							list='';
						}
					}
				},self={add:function(){
					if(list){
						if(memory&&!firing){
							firingIndex=list.length-1;queue.push(memory);
						}(function add(args){
							jQuery.each(args,function(_,arg){
								if(isFunction(arg)){
									if(!options.unique||!self.has(arg)){
										list.push(arg);
									}
								}else if(arg&&arg.length&&toType(arg)!=='string'){
									add(arg);
								}
							});
						})(arguments);if(memory&&!firing){
							fire();
						}
					}return this;
				},remove:function(){
					jQuery.each(arguments,function(_,arg){
						var index;while((index=jQuery.inArray(arg,list,index))>-1){
							list.splice(index,1);if(index<=firingIndex){
								firingIndex--;
							}
						}
					});return this;
				},has:function(fn){
					return fn?jQuery.inArray(fn,list)>-1:list.length>0;
				},empty:function(){
					if(list){
						list=[];
					}return this;
				},disable:function(){
					locked=queue=[];list=memory='';return this;
				},disabled:function(){
					return!list;
				},lock:function(){
					locked=queue=[];if(!memory&&!firing){
						list=memory='';
					}return this;
				},locked:function(){
					return!!locked;
				},fireWith:function(context,args){
					if(!locked){
						args=args||[];args=[context,args.slice?args.slice():args];queue.push(args);if(!firing){
							fire();
						}
					}return this;
				},fire:function(){
					self.fireWith(this,arguments);return this;
				},fired:function(){
					return!!fired;
				}};return self;
		};function Identity(v){
			return v;
		}function Thrower(ex){
			throw ex;
		}function adoptValue(value,resolve,reject,noValue){
			var method;try{
				if(value&&isFunction(method=value.promise)){
					method.call(value).done(resolve).fail(reject);
				}else if(value&&isFunction(method=value.then)){
					method.call(value,resolve,reject);
				}else{
					resolve.apply(undefined,[value].slice(noValue));
				}
			}catch(value){
				reject.apply(undefined,[value]);
			}
		}jQuery.extend({Deferred:function(func){
			var tuples=[['notify','progress',jQuery.Callbacks('memory'),jQuery.Callbacks('memory'),2],['resolve','done',jQuery.Callbacks('once memory'),jQuery.Callbacks('once memory'),0,'resolved'],['reject','fail',jQuery.Callbacks('once memory'),jQuery.Callbacks('once memory'),1,'rejected']],state='pending',promise={state:function(){
					return state;
				},always:function(){
					deferred.done(arguments).fail(arguments);return this;
				},catch:function(fn){
					return promise.then(null,fn);
				},pipe:function(){
					var fns=arguments;return jQuery.Deferred(function(newDefer){
						jQuery.each(tuples,function(_i,tuple){
							var fn=isFunction(fns[tuple[4]])&&fns[tuple[4]];deferred[tuple[1]](function(){
								var returned=fn&&fn.apply(this,arguments);if(returned&&isFunction(returned.promise)){
									returned.promise().progress(newDefer.notify).done(newDefer.resolve).fail(newDefer.reject);
								}else{
									newDefer[tuple[0]+'With'](this,fn?[returned]:arguments);
								}
							});
						});fns=null;
					}).promise();
				},then:function(onFulfilled,onRejected,onProgress){
					var maxDepth=0;function resolve(depth,deferred,handler,special){
						return function(){
							var that=this,args=arguments,mightThrow=function(){
									var returned,then;if(depth<maxDepth){
										return;
									}returned=handler.apply(that,args);if(returned===deferred.promise()){
										throw new TypeError('Thenable self-resolution');
									}then=returned&&(typeof returned==='object'||typeof returned==='function')&&returned.then;if(isFunction(then)){
										if(special){
											then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special));
										}else{
											maxDepth++;then.call(returned,resolve(maxDepth,deferred,Identity,special),resolve(maxDepth,deferred,Thrower,special),resolve(maxDepth,deferred,Identity,deferred.notifyWith));
										}
									}else{
										if(handler!==Identity){
											that=undefined;args=[returned];
										}(special||deferred.resolveWith)(that,args);
									}
								},process=special?mightThrow:function(){
									try{
										mightThrow();
									}catch(e){
										if(jQuery.Deferred.exceptionHook){
											jQuery.Deferred.exceptionHook(e,process.stackTrace);
										}if(depth+1>=maxDepth){
											if(handler!==Thrower){
												that=undefined;args=[e];
											}deferred.rejectWith(that,args);
										}
									}
								};if(depth){
								process();
							}else{
								if(jQuery.Deferred.getStackHook){
									process.stackTrace=jQuery.Deferred.getStackHook();
								}window.setTimeout(process);
							}
						};
					}return jQuery.Deferred(function(newDefer){
						tuples[0][3].add(resolve(0,newDefer,isFunction(onProgress)?onProgress:Identity,newDefer.notifyWith));tuples[1][3].add(resolve(0,newDefer,isFunction(onFulfilled)?onFulfilled:Identity));tuples[2][3].add(resolve(0,newDefer,isFunction(onRejected)?onRejected:Thrower));
					}).promise();
				},promise:function(obj){
					return obj!=null?jQuery.extend(obj,promise):promise;
				}},deferred={};jQuery.each(tuples,function(i,tuple){
				var list=tuple[2],stateString=tuple[5];promise[tuple[1]]=list.add;if(stateString){
					list.add(function(){
						state=stateString;
					},tuples[3-i][2].disable,tuples[3-i][3].disable,tuples[0][2].lock,tuples[0][3].lock);
				}list.add(tuple[3].fire);deferred[tuple[0]]=function(){
					deferred[tuple[0]+'With'](this===deferred?undefined:this,arguments);return this;
				};deferred[tuple[0]+'With']=list.fireWith;
			});promise.promise(deferred);if(func){
				func.call(deferred,deferred);
			}return deferred;
		},when:function(singleValue){
			var remaining=arguments.length,i=remaining,resolveContexts=Array(i),resolveValues=slice.call(arguments),primary=jQuery.Deferred(),updateFunc=function(i){
				return function(value){
					resolveContexts[i]=this;resolveValues[i]=arguments.length>1?slice.call(arguments):value;if(!--remaining){
						primary.resolveWith(resolveContexts,resolveValues);
					}
				};
			};if(remaining<=1){
				adoptValue(singleValue,primary.done(updateFunc(i)).resolve,primary.reject,!remaining);if(primary.state()==='pending'||isFunction(resolveValues[i]&&resolveValues[i].then)){
					return primary.then();
				}
			}while(i--){
				adoptValue(resolveValues[i],updateFunc(i),primary.reject);
			}return primary.promise();
		}});var rerrorNames=/^(Eval|Internal|Range|Reference|Syntax|Type|URI)Error$/;jQuery.Deferred.exceptionHook=function(error,stack){
			if(window.console&&window.console.warn&&error&&rerrorNames.test(error.name)){
				window.console.warn('jQuery.Deferred exception: '+error.message,error.stack,stack);
			}
		};jQuery.readyException=function(error){
			window.setTimeout(function(){
				throw error;
			});
		};var readyList=jQuery.Deferred();jQuery.fn.ready=function(fn){
			readyList.then(fn).catch(function(error){
				jQuery.readyException(error);
			});return this;
		};jQuery.extend({isReady:false,readyWait:1,ready:function(wait){
			if(wait===true?--jQuery.readyWait:jQuery.isReady){
				return;
			}jQuery.isReady=true;if(wait!==true&&--jQuery.readyWait>0){
				return;
			}readyList.resolveWith(document,[jQuery]);
		}});jQuery.ready.then=readyList.then;function completed(){
			document.removeEventListener('DOMContentLoaded',completed);window.removeEventListener('load',completed);jQuery.ready();
		}if(document.readyState==='complete'||document.readyState!=='loading'&&!document.documentElement.doScroll){
			window.setTimeout(jQuery.ready);
		}else{
			document.addEventListener('DOMContentLoaded',completed);window.addEventListener('load',completed);
		}var access=function(elems,fn,key,value,chainable,emptyGet,raw){
			var i=0,len=elems.length,bulk=key==null;if(toType(key)==='object'){
				chainable=true;for(i in key){
					access(elems,fn,i,key[i],true,emptyGet,raw);
				}
			}else if(value!==undefined){
				chainable=true;if(!isFunction(value)){
					raw=true;
				}if(bulk){
					if(raw){
						fn.call(elems,value);fn=null;
					}else{
						bulk=fn;fn=function(elem,_key,value){
							return bulk.call(jQuery(elem),value);
						};
					}
				}if(fn){
					for(;i<len;i++){
						fn(elems[i],key,raw?value:value.call(elems[i],i,fn(elems[i],key)));
					}
				}
			}if(chainable){
				return elems;
			}if(bulk){
				return fn.call(elems);
			}return len?fn(elems[0],key):emptyGet;
		};var rmsPrefix=/^-ms-/,rdashAlpha=/-([a-z])/g;function fcamelCase(_all,letter){
			return letter.toUpperCase();
		}function camelCase(string){
			return string.replace(rmsPrefix,'ms-').replace(rdashAlpha,fcamelCase);
		}var acceptData=function(owner){
			return owner.nodeType===1||owner.nodeType===9||!+owner.nodeType;
		};function Data(){
			this.expando=jQuery.expando+Data.uid++;
		}Data.uid=1;Data.prototype={cache:function(owner){
			var value=owner[this.expando];if(!value){
				value={};if(acceptData(owner)){
					if(owner.nodeType){
						owner[this.expando]=value;
					}else{
						Object.defineProperty(owner,this.expando,{value:value,configurable:true});
					}
				}
			}return value;
		},set:function(owner,data,value){
			var prop,cache=this.cache(owner);if(typeof data==='string'){
				cache[camelCase(data)]=value;
			}else{
				for(prop in data){
					cache[camelCase(prop)]=data[prop];
				}
			}return cache;
		},get:function(owner,key){
			return key===undefined?this.cache(owner):owner[this.expando]&&owner[this.expando][camelCase(key)];
		},access:function(owner,key,value){
			if(key===undefined||key&&typeof key==='string'&&value===undefined){
				return this.get(owner,key);
			}this.set(owner,key,value);return value!==undefined?value:key;
		},remove:function(owner,key){
			var i,cache=owner[this.expando];if(cache===undefined){
				return;
			}if(key!==undefined){
				if(Array.isArray(key)){
					key=key.map(camelCase);
				}else{
					key=camelCase(key);key=key in cache?[key]:key.match(rnothtmlwhite)||[];
				}i=key.length;while(i--){
					delete cache[key[i]];
				}
			}if(key===undefined||jQuery.isEmptyObject(cache)){
				if(owner.nodeType){
					owner[this.expando]=undefined;
				}else{
					delete owner[this.expando];
				}
			}
		},hasData:function(owner){
			var cache=owner[this.expando];return cache!==undefined&&!jQuery.isEmptyObject(cache);
		}};var dataPriv=new Data;var dataUser=new Data;var rbrace=/^(?:\{[\w\W]*\}|\[[\w\W]*\])$/,rmultiDash=/[A-Z]/g;function getData(data){
			if(data==='true'){
				return true;
			}if(data==='false'){
				return false;
			}if(data==='null'){
				return null;
			}if(data===+data+''){
				return+data;
			}if(rbrace.test(data)){
				return JSON.parse(data);
			}return data;
		}function dataAttr(elem,key,data){
			var name;if(data===undefined&&elem.nodeType===1){
				name='data-'+key.replace(rmultiDash,'-$&').toLowerCase();data=elem.getAttribute(name);if(typeof data==='string'){
					try{
						data=getData(data);
					}catch(e){}dataUser.set(elem,key,data);
				}else{
					data=undefined;
				}
			}return data;
		}jQuery.extend({hasData:function(elem){
			return dataUser.hasData(elem)||dataPriv.hasData(elem);
		},data:function(elem,name,data){
			return dataUser.access(elem,name,data);
		},removeData:function(elem,name){
			dataUser.remove(elem,name);
		},_data:function(elem,name,data){
			return dataPriv.access(elem,name,data);
		},_removeData:function(elem,name){
			dataPriv.remove(elem,name);
		}});jQuery.fn.extend({data:function(key,value){
			var i,name,data,elem=this[0],attrs=elem&&elem.attributes;if(key===undefined){
				if(this.length){
					data=dataUser.get(elem);if(elem.nodeType===1&&!dataPriv.get(elem,'hasDataAttrs')){
						i=attrs.length;while(i--){
							if(attrs[i]){
								name=attrs[i].name;if(name.indexOf('data-')===0){
									name=camelCase(name.slice(5));dataAttr(elem,name,data[name]);
								}
							}
						}dataPriv.set(elem,'hasDataAttrs',true);
					}
				}return data;
			}if(typeof key==='object'){
				return this.each(function(){
					dataUser.set(this,key);
				});
			}return access(this,function(value){
				var data;if(elem&&value===undefined){
					data=dataUser.get(elem,key);if(data!==undefined){
						return data;
					}data=dataAttr(elem,key);if(data!==undefined){
						return data;
					}return;
				}this.each(function(){
					dataUser.set(this,key,value);
				});
			},null,value,arguments.length>1,null,true);
		},removeData:function(key){
			return this.each(function(){
				dataUser.remove(this,key);
			});
		}});jQuery.extend({queue:function(elem,type,data){
			var queue;if(elem){
				type=(type||'fx')+'queue';queue=dataPriv.get(elem,type);if(data){
					if(!queue||Array.isArray(data)){
						queue=dataPriv.access(elem,type,jQuery.makeArray(data));
					}else{
						queue.push(data);
					}
				}return queue||[];
			}
		},dequeue:function(elem,type){
			type=type||'fx';var queue=jQuery.queue(elem,type),startLength=queue.length,fn=queue.shift(),hooks=jQuery._queueHooks(elem,type),next=function(){
				jQuery.dequeue(elem,type);
			};if(fn==='inprogress'){
				fn=queue.shift();startLength--;
			}if(fn){
				if(type==='fx'){
					queue.unshift('inprogress');
				}delete hooks.stop;fn.call(elem,next,hooks);
			}if(!startLength&&hooks){
				hooks.empty.fire();
			}
		},_queueHooks:function(elem,type){
			var key=type+'queueHooks';return dataPriv.get(elem,key)||dataPriv.access(elem,key,{empty:jQuery.Callbacks('once memory').add(function(){
				dataPriv.remove(elem,[type+'queue',key]);
			})});
		}});jQuery.fn.extend({queue:function(type,data){
			var setter=2;if(typeof type!=='string'){
				data=type;type='fx';setter--;
			}if(arguments.length<setter){
				return jQuery.queue(this[0],type);
			}return data===undefined?this:this.each(function(){
				var queue=jQuery.queue(this,type,data);jQuery._queueHooks(this,type);if(type==='fx'&&queue[0]!=='inprogress'){
					jQuery.dequeue(this,type);
				}
			});
		},dequeue:function(type){
			return this.each(function(){
				jQuery.dequeue(this,type);
			});
		},clearQueue:function(type){
			return this.queue(type||'fx',[]);
		},promise:function(type,obj){
			var tmp,count=1,defer=jQuery.Deferred(),elements=this,i=this.length,resolve=function(){
				if(!--count){
					defer.resolveWith(elements,[elements]);
				}
			};if(typeof type!=='string'){
				obj=type;type=undefined;
			}type=type||'fx';while(i--){
				tmp=dataPriv.get(elements[i],type+'queueHooks');if(tmp&&tmp.empty){
					count++;tmp.empty.add(resolve);
				}
			}resolve();return defer.promise(obj);
		}});var pnum=/[+-]?(?:\d*\.|)\d+(?:[eE][+-]?\d+|)/.source;var rcssNum=new RegExp('^(?:([+-])=|)('+pnum+')([a-z%]*)$','i');var cssExpand=['Top','Right','Bottom','Left'];var documentElement=document.documentElement;var isAttached=function(elem){
				return jQuery.contains(elem.ownerDocument,elem);
			},composed={composed:true};if(documentElement.getRootNode){
			isAttached=function(elem){
				return jQuery.contains(elem.ownerDocument,elem)||elem.getRootNode(composed)===elem.ownerDocument;
			};
		}var isHiddenWithinTree=function(elem,el){
			elem=el||elem;return elem.style.display==='none'||elem.style.display===''&&isAttached(elem)&&jQuery.css(elem,'display')==='none';
		};function adjustCSS(elem,prop,valueParts,tween){
			var adjusted,scale,maxIterations=20,currentValue=tween?function(){
					return tween.cur();
				}:function(){
					return jQuery.css(elem,prop,'');
				},initial=currentValue(),unit=valueParts&&valueParts[3]||(jQuery.cssNumber[prop]?'':'px'),initialInUnit=elem.nodeType&&(jQuery.cssNumber[prop]||unit!=='px'&&+initial)&&rcssNum.exec(jQuery.css(elem,prop));if(initialInUnit&&initialInUnit[3]!==unit){
				initial=initial/2;unit=unit||initialInUnit[3];initialInUnit=+initial||1;while(maxIterations--){
					jQuery.style(elem,prop,initialInUnit+unit);if((1-scale)*(1-(scale=currentValue()/initial||.5))<=0){
						maxIterations=0;
					}initialInUnit=initialInUnit/scale;
				}initialInUnit=initialInUnit*2;jQuery.style(elem,prop,initialInUnit+unit);valueParts=valueParts||[];
			}if(valueParts){
				initialInUnit=+initialInUnit||+initial||0;adjusted=valueParts[1]?initialInUnit+(valueParts[1]+1)*valueParts[2]:+valueParts[2];if(tween){
					tween.unit=unit;tween.start=initialInUnit;tween.end=adjusted;
				}
			}return adjusted;
		}var defaultDisplayMap={};function getDefaultDisplay(elem){
			var temp,doc=elem.ownerDocument,nodeName=elem.nodeName,display=defaultDisplayMap[nodeName];if(display){
				return display;
			}temp=doc.body.appendChild(doc.createElement(nodeName));display=jQuery.css(temp,'display');temp.parentNode.removeChild(temp);if(display==='none'){
				display='block';
			}defaultDisplayMap[nodeName]=display;return display;
		}function showHide(elements,show){
			var display,elem,values=[],index=0,length=elements.length;for(;index<length;index++){
				elem=elements[index];if(!elem.style){
					continue;
				}display=elem.style.display;if(show){
					if(display==='none'){
						values[index]=dataPriv.get(elem,'display')||null;if(!values[index]){
							elem.style.display='';
						}
					}if(elem.style.display===''&&isHiddenWithinTree(elem)){
						values[index]=getDefaultDisplay(elem);
					}
				}else{
					if(display!=='none'){
						values[index]='none';dataPriv.set(elem,'display',display);
					}
				}
			}for(index=0;index<length;index++){
				if(values[index]!=null){
					elements[index].style.display=values[index];
				}
			}return elements;
		}jQuery.fn.extend({show:function(){
			return showHide(this,true);
		},hide:function(){
			return showHide(this);
		},toggle:function(state){
			if(typeof state==='boolean'){
				return state?this.show():this.hide();
			}return this.each(function(){
				if(isHiddenWithinTree(this)){
					jQuery(this).show();
				}else{
					jQuery(this).hide();
				}
			});
		}});var rcheckableType=/^(?:checkbox|radio)$/i;var rtagName=/<([a-z][^\/\0>\x20\t\r\n\f]*)/i;var rscriptType=/^$|^module$|\/(?:java|ecma)script/i;(function(){
			var fragment=document.createDocumentFragment(),div=fragment.appendChild(document.createElement('div')),input=document.createElement('input');input.setAttribute('type','radio');input.setAttribute('checked','checked');input.setAttribute('name','t');div.appendChild(input);support.checkClone=div.cloneNode(true).cloneNode(true).lastChild.checked;div.innerHTML='<textarea>x</textarea>';support.noCloneChecked=!!div.cloneNode(true).lastChild.defaultValue;div.innerHTML='<option></option>';support.option=!!div.lastChild;
		})();var wrapMap={thead:[1,'<table>','</table>'],col:[2,'<table><colgroup>','</colgroup></table>'],tr:[2,'<table><tbody>','</tbody></table>'],td:[3,'<table><tbody><tr>','</tr></tbody></table>'],_default:[0,'','']};wrapMap.tbody=wrapMap.tfoot=wrapMap.colgroup=wrapMap.caption=wrapMap.thead;wrapMap.th=wrapMap.td;if(!support.option){
			wrapMap.optgroup=wrapMap.option=[1,'<select multiple=\'multiple\'>','</select>'];
		}function getAll(context,tag){
			var ret;if(typeof context.getElementsByTagName!=='undefined'){
				ret=context.getElementsByTagName(tag||'*');
			}else if(typeof context.querySelectorAll!=='undefined'){
				ret=context.querySelectorAll(tag||'*');
			}else{
				ret=[];
			}if(tag===undefined||tag&&nodeName(context,tag)){
				return jQuery.merge([context],ret);
			}return ret;
		}function setGlobalEval(elems,refElements){
			var i=0,l=elems.length;for(;i<l;i++){
				dataPriv.set(elems[i],'globalEval',!refElements||dataPriv.get(refElements[i],'globalEval'));
			}
		}var rhtml=/<|&#?\w+;/;function buildFragment(elems,context,scripts,selection,ignored){
			var elem,tmp,tag,wrap,attached,j,fragment=context.createDocumentFragment(),nodes=[],i=0,l=elems.length;for(;i<l;i++){
				elem=elems[i];if(elem||elem===0){
					if(toType(elem)==='object'){
						jQuery.merge(nodes,elem.nodeType?[elem]:elem);
					}else if(!rhtml.test(elem)){
						nodes.push(context.createTextNode(elem));
					}else{
						tmp=tmp||fragment.appendChild(context.createElement('div'));tag=(rtagName.exec(elem)||['',''])[1].toLowerCase();wrap=wrapMap[tag]||wrapMap._default;tmp.innerHTML=wrap[1]+jQuery.htmlPrefilter(elem)+wrap[2];j=wrap[0];while(j--){
							tmp=tmp.lastChild;
						}jQuery.merge(nodes,tmp.childNodes);tmp=fragment.firstChild;tmp.textContent='';
					}
				}
			}fragment.textContent='';i=0;while(elem=nodes[i++]){
				if(selection&&jQuery.inArray(elem,selection)>-1){
					if(ignored){
						ignored.push(elem);
					}continue;
				}attached=isAttached(elem);tmp=getAll(fragment.appendChild(elem),'script');if(attached){
					setGlobalEval(tmp);
				}if(scripts){
					j=0;while(elem=tmp[j++]){
						if(rscriptType.test(elem.type||'')){
							scripts.push(elem);
						}
					}
				}
			}return fragment;
		}var rtypenamespace=/^([^.]*)(?:\.(.+)|)/;function returnTrue(){
			return true;
		}function returnFalse(){
			return false;
		}function expectSync(elem,type){
			return elem===safeActiveElement()===(type==='focus');
		}function safeActiveElement(){
			try{
				return document.activeElement;
			}catch(err){}
		}function on(elem,types,selector,data,fn,one){
			var origFn,type;if(typeof types==='object'){
				if(typeof selector!=='string'){
					data=data||selector;selector=undefined;
				}for(type in types){
					on(elem,type,selector,data,types[type],one);
				}return elem;
			}if(data==null&&fn==null){
				fn=selector;data=selector=undefined;
			}else if(fn==null){
				if(typeof selector==='string'){
					fn=data;data=undefined;
				}else{
					fn=data;data=selector;selector=undefined;
				}
			}if(fn===false){
				fn=returnFalse;
			}else if(!fn){
				return elem;
			}if(one===1){
				origFn=fn;fn=function(event){
					jQuery().off(event);return origFn.apply(this,arguments);
				};fn.guid=origFn.guid||(origFn.guid=jQuery.guid++);
			}return elem.each(function(){
				jQuery.event.add(this,types,fn,data,selector);
			});
		}jQuery.event={global:{},add:function(elem,types,handler,data,selector){
			var handleObjIn,eventHandle,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.get(elem);if(!acceptData(elem)){
				return;
			}if(handler.handler){
				handleObjIn=handler;handler=handleObjIn.handler;selector=handleObjIn.selector;
			}if(selector){
				jQuery.find.matchesSelector(documentElement,selector);
			}if(!handler.guid){
				handler.guid=jQuery.guid++;
			}if(!(events=elemData.events)){
				events=elemData.events=Object.create(null);
			}if(!(eventHandle=elemData.handle)){
				eventHandle=elemData.handle=function(e){
					return typeof jQuery!=='undefined'&&jQuery.event.triggered!==e.type?jQuery.event.dispatch.apply(elem,arguments):undefined;
				};
			}types=(types||'').match(rnothtmlwhite)||[''];t=types.length;while(t--){
				tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||'').split('.').sort();if(!type){
					continue;
				}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;special=jQuery.event.special[type]||{};handleObj=jQuery.extend({type:type,origType:origType,data:data,handler:handler,guid:handler.guid,selector:selector,needsContext:selector&&jQuery.expr.match.needsContext.test(selector),namespace:namespaces.join('.')},handleObjIn);if(!(handlers=events[type])){
					handlers=events[type]=[];handlers.delegateCount=0;if(!special.setup||special.setup.call(elem,data,namespaces,eventHandle)===false){
						if(elem.addEventListener){
							elem.addEventListener(type,eventHandle);
						}
					}
				}if(special.add){
					special.add.call(elem,handleObj);if(!handleObj.handler.guid){
						handleObj.handler.guid=handler.guid;
					}
				}if(selector){
					handlers.splice(handlers.delegateCount++,0,handleObj);
				}else{
					handlers.push(handleObj);
				}jQuery.event.global[type]=true;
			}
		},remove:function(elem,types,handler,selector,mappedTypes){
			var j,origCount,tmp,events,t,handleObj,special,handlers,type,namespaces,origType,elemData=dataPriv.hasData(elem)&&dataPriv.get(elem);if(!elemData||!(events=elemData.events)){
				return;
			}types=(types||'').match(rnothtmlwhite)||[''];t=types.length;while(t--){
				tmp=rtypenamespace.exec(types[t])||[];type=origType=tmp[1];namespaces=(tmp[2]||'').split('.').sort();if(!type){
					for(type in events){
						jQuery.event.remove(elem,type+types[t],handler,selector,true);
					}continue;
				}special=jQuery.event.special[type]||{};type=(selector?special.delegateType:special.bindType)||type;handlers=events[type]||[];tmp=tmp[2]&&new RegExp('(^|\\.)'+namespaces.join('\\.(?:.*\\.|)')+'(\\.|$)');origCount=j=handlers.length;while(j--){
					handleObj=handlers[j];if((mappedTypes||origType===handleObj.origType)&&(!handler||handler.guid===handleObj.guid)&&(!tmp||tmp.test(handleObj.namespace))&&(!selector||selector===handleObj.selector||selector==='**'&&handleObj.selector)){
						handlers.splice(j,1);if(handleObj.selector){
							handlers.delegateCount--;
						}if(special.remove){
							special.remove.call(elem,handleObj);
						}
					}
				}if(origCount&&!handlers.length){
					if(!special.teardown||special.teardown.call(elem,namespaces,elemData.handle)===false){
						jQuery.removeEvent(elem,type,elemData.handle);
					}delete events[type];
				}
			}if(jQuery.isEmptyObject(events)){
				dataPriv.remove(elem,'handle events');
			}
		},dispatch:function(nativeEvent){
			var i,j,ret,matched,handleObj,handlerQueue,args=new Array(arguments.length),event=jQuery.event.fix(nativeEvent),handlers=(dataPriv.get(this,'events')||Object.create(null))[event.type]||[],special=jQuery.event.special[event.type]||{};args[0]=event;for(i=1;i<arguments.length;i++){
				args[i]=arguments[i];
			}event.delegateTarget=this;if(special.preDispatch&&special.preDispatch.call(this,event)===false){
				return;
			}handlerQueue=jQuery.event.handlers.call(this,event,handlers);i=0;while((matched=handlerQueue[i++])&&!event.isPropagationStopped()){
				event.currentTarget=matched.elem;j=0;while((handleObj=matched.handlers[j++])&&!event.isImmediatePropagationStopped()){
					if(!event.rnamespace||handleObj.namespace===false||event.rnamespace.test(handleObj.namespace)){
						event.handleObj=handleObj;event.data=handleObj.data;ret=((jQuery.event.special[handleObj.origType]||{}).handle||handleObj.handler).apply(matched.elem,args);if(ret!==undefined){
							if((event.result=ret)===false){
								event.preventDefault();event.stopPropagation();
							}
						}
					}
				}
			}if(special.postDispatch){
				special.postDispatch.call(this,event);
			}return event.result;
		},handlers:function(event,handlers){
			var i,handleObj,sel,matchedHandlers,matchedSelectors,handlerQueue=[],delegateCount=handlers.delegateCount,cur=event.target;if(delegateCount&&cur.nodeType&&!(event.type==='click'&&event.button>=1)){
				for(;cur!==this;cur=cur.parentNode||this){
					if(cur.nodeType===1&&!(event.type==='click'&&cur.disabled===true)){
						matchedHandlers=[];matchedSelectors={};for(i=0;i<delegateCount;i++){
							handleObj=handlers[i];sel=handleObj.selector+' ';if(matchedSelectors[sel]===undefined){
								matchedSelectors[sel]=handleObj.needsContext?jQuery(sel,this).index(cur)>-1:jQuery.find(sel,this,null,[cur]).length;
							}if(matchedSelectors[sel]){
								matchedHandlers.push(handleObj);
							}
						}if(matchedHandlers.length){
							handlerQueue.push({elem:cur,handlers:matchedHandlers});
						}
					}
				}
			}cur=this;if(delegateCount<handlers.length){
				handlerQueue.push({elem:cur,handlers:handlers.slice(delegateCount)});
			}return handlerQueue;
		},addProp:function(name,hook){
			Object.defineProperty(jQuery.Event.prototype,name,{enumerable:true,configurable:true,get:isFunction(hook)?function(){
				if(this.originalEvent){
					return hook(this.originalEvent);
				}
			}:function(){
				if(this.originalEvent){
					return this.originalEvent[name];
				}
			},set:function(value){
				Object.defineProperty(this,name,{enumerable:true,configurable:true,writable:true,value:value});
			}});
		},fix:function(originalEvent){
			return originalEvent[jQuery.expando]?originalEvent:new jQuery.Event(originalEvent);
		},special:{load:{noBubble:true},click:{setup:function(data){
			var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,'input')){
				leverageNative(el,'click',returnTrue);
			}return false;
		},trigger:function(data){
			var el=this||data;if(rcheckableType.test(el.type)&&el.click&&nodeName(el,'input')){
				leverageNative(el,'click');
			}return true;
		},_default:function(event){
			var target=event.target;return rcheckableType.test(target.type)&&target.click&&nodeName(target,'input')&&dataPriv.get(target,'click')||nodeName(target,'a');
		}},beforeunload:{postDispatch:function(event){
			if(event.result!==undefined&&event.originalEvent){
				event.originalEvent.returnValue=event.result;
			}
		}}}};function leverageNative(el,type,expectSync){
			if(!expectSync){
				if(dataPriv.get(el,type)===undefined){
					jQuery.event.add(el,type,returnTrue);
				}return;
			}dataPriv.set(el,type,false);jQuery.event.add(el,type,{namespace:false,handler:function(event){
				var notAsync,result,saved=dataPriv.get(this,type);if(event.isTrigger&1&&this[type]){
					if(!saved.length){
						saved=slice.call(arguments);dataPriv.set(this,type,saved);notAsync=expectSync(this,type);this[type]();result=dataPriv.get(this,type);if(saved!==result||notAsync){
							dataPriv.set(this,type,false);
						}else{
							result={};
						}if(saved!==result){
							event.stopImmediatePropagation();event.preventDefault();return result&&result.value;
						}
					}else if((jQuery.event.special[type]||{}).delegateType){
						event.stopPropagation();
					}
				}else if(saved.length){
					dataPriv.set(this,type,{value:jQuery.event.trigger(jQuery.extend(saved[0],jQuery.Event.prototype),saved.slice(1),this)});event.stopImmediatePropagation();
				}
			}});
		}jQuery.removeEvent=function(elem,type,handle){
			if(elem.removeEventListener){
				elem.removeEventListener(type,handle);
			}
		};jQuery.Event=function(src,props){
			if(!(this instanceof jQuery.Event)){
				return new jQuery.Event(src,props);
			}if(src&&src.type){
				this.originalEvent=src;this.type=src.type;this.isDefaultPrevented=src.defaultPrevented||src.defaultPrevented===undefined&&src.returnValue===false?returnTrue:returnFalse;this.target=src.target&&src.target.nodeType===3?src.target.parentNode:src.target;this.currentTarget=src.currentTarget;this.relatedTarget=src.relatedTarget;
			}else{
				this.type=src;
			}if(props){
				jQuery.extend(this,props);
			}this.timeStamp=src&&src.timeStamp||Date.now();this[jQuery.expando]=true;
		};jQuery.Event.prototype={constructor:jQuery.Event,isDefaultPrevented:returnFalse,isPropagationStopped:returnFalse,isImmediatePropagationStopped:returnFalse,isSimulated:false,preventDefault:function(){
			var e=this.originalEvent;this.isDefaultPrevented=returnTrue;if(e&&!this.isSimulated){
				e.preventDefault();
			}
		},stopPropagation:function(){
			var e=this.originalEvent;this.isPropagationStopped=returnTrue;if(e&&!this.isSimulated){
				e.stopPropagation();
			}
		},stopImmediatePropagation:function(){
			var e=this.originalEvent;this.isImmediatePropagationStopped=returnTrue;if(e&&!this.isSimulated){
				e.stopImmediatePropagation();
			}this.stopPropagation();
		}};jQuery.each({altKey:true,bubbles:true,cancelable:true,changedTouches:true,ctrlKey:true,detail:true,eventPhase:true,metaKey:true,pageX:true,pageY:true,shiftKey:true,view:true,char:true,code:true,charCode:true,key:true,keyCode:true,button:true,buttons:true,clientX:true,clientY:true,offsetX:true,offsetY:true,pointerId:true,pointerType:true,screenX:true,screenY:true,targetTouches:true,toElement:true,touches:true,which:true},jQuery.event.addProp);jQuery.each({focus:'focusin',blur:'focusout'},function(type,delegateType){
			jQuery.event.special[type]={setup:function(){
				leverageNative(this,type,expectSync);return false;
			},trigger:function(){
				leverageNative(this,type);return true;
			},_default:function(){
				return true;
			},delegateType:delegateType};
		});jQuery.each({mouseenter:'mouseover',mouseleave:'mouseout',pointerenter:'pointerover',pointerleave:'pointerout'},function(orig,fix){
			jQuery.event.special[orig]={delegateType:fix,bindType:fix,handle:function(event){
				var ret,target=this,related=event.relatedTarget,handleObj=event.handleObj;if(!related||related!==target&&!jQuery.contains(target,related)){
					event.type=handleObj.origType;ret=handleObj.handler.apply(this,arguments);event.type=fix;
				}return ret;
			}};
		});jQuery.fn.extend({on:function(types,selector,data,fn){
			return on(this,types,selector,data,fn);
		},one:function(types,selector,data,fn){
			return on(this,types,selector,data,fn,1);
		},off:function(types,selector,fn){
			var handleObj,type;if(types&&types.preventDefault&&types.handleObj){
				handleObj=types.handleObj;jQuery(types.delegateTarget).off(handleObj.namespace?handleObj.origType+'.'+handleObj.namespace:handleObj.origType,handleObj.selector,handleObj.handler);return this;
			}if(typeof types==='object'){
				for(type in types){
					this.off(type,selector,types[type]);
				}return this;
			}if(selector===false||typeof selector==='function'){
				fn=selector;selector=undefined;
			}if(fn===false){
				fn=returnFalse;
			}return this.each(function(){
				jQuery.event.remove(this,types,fn,selector);
			});
		}});var rnoInnerhtml=/<script|<style|<link/i,rchecked=/checked\s*(?:[^=]|=\s*.checked.)/i,rcleanScript=/^\s*<!(?:\[CDATA\[|--)|(?:\]\]|--)>\s*$/g;function manipulationTarget(elem,content){
			if(nodeName(elem,'table')&&nodeName(content.nodeType!==11?content:content.firstChild,'tr')){
				return jQuery(elem).children('tbody')[0]||elem;
			}return elem;
		}function disableScript(elem){
			elem.type=(elem.getAttribute('type')!==null)+'/'+elem.type;return elem;
		}function restoreScript(elem){
			if((elem.type||'').slice(0,5)==='true/'){
				elem.type=elem.type.slice(5);
			}else{
				elem.removeAttribute('type');
			}return elem;
		}function cloneCopyEvent(src,dest){
			var i,l,type,pdataOld,udataOld,udataCur,events;if(dest.nodeType!==1){
				return;
			}if(dataPriv.hasData(src)){
				pdataOld=dataPriv.get(src);events=pdataOld.events;if(events){
					dataPriv.remove(dest,'handle events');for(type in events){
						for(i=0,l=events[type].length;i<l;i++){
							jQuery.event.add(dest,type,events[type][i]);
						}
					}
				}
			}if(dataUser.hasData(src)){
				udataOld=dataUser.access(src);udataCur=jQuery.extend({},udataOld);dataUser.set(dest,udataCur);
			}
		}function fixInput(src,dest){
			var nodeName=dest.nodeName.toLowerCase();if(nodeName==='input'&&rcheckableType.test(src.type)){
				dest.checked=src.checked;
			}else if(nodeName==='input'||nodeName==='textarea'){
				dest.defaultValue=src.defaultValue;
			}
		}function domManip(collection,args,callback,ignored){
			args=flat(args);var fragment,first,scripts,hasScripts,node,doc,i=0,l=collection.length,iNoClone=l-1,value=args[0],valueIsFunction=isFunction(value);if(valueIsFunction||l>1&&typeof value==='string'&&!support.checkClone&&rchecked.test(value)){
				return collection.each(function(index){
					var self=collection.eq(index);if(valueIsFunction){
						args[0]=value.call(this,index,self.html());
					}domManip(self,args,callback,ignored);
				});
			}if(l){
				fragment=buildFragment(args,collection[0].ownerDocument,false,collection,ignored);first=fragment.firstChild;if(fragment.childNodes.length===1){
					fragment=first;
				}if(first||ignored){
					scripts=jQuery.map(getAll(fragment,'script'),disableScript);hasScripts=scripts.length;for(;i<l;i++){
						node=fragment;if(i!==iNoClone){
							node=jQuery.clone(node,true,true);if(hasScripts){
								jQuery.merge(scripts,getAll(node,'script'));
							}
						}callback.call(collection[i],node,i);
					}if(hasScripts){
						doc=scripts[scripts.length-1].ownerDocument;jQuery.map(scripts,restoreScript);for(i=0;i<hasScripts;i++){
							node=scripts[i];if(rscriptType.test(node.type||'')&&!dataPriv.access(node,'globalEval')&&jQuery.contains(doc,node)){
								if(node.src&&(node.type||'').toLowerCase()!=='module'){
									if(jQuery._evalUrl&&!node.noModule){
										jQuery._evalUrl(node.src,{nonce:node.nonce||node.getAttribute('nonce')},doc);
									}
								}else{
									DOMEval(node.textContent.replace(rcleanScript,''),node,doc);
								}
							}
						}
					}
				}
			}return collection;
		}function remove(elem,selector,keepData){
			var node,nodes=selector?jQuery.filter(selector,elem):elem,i=0;for(;(node=nodes[i])!=null;i++){
				if(!keepData&&node.nodeType===1){
					jQuery.cleanData(getAll(node));
				}if(node.parentNode){
					if(keepData&&isAttached(node)){
						setGlobalEval(getAll(node,'script'));
					}node.parentNode.removeChild(node);
				}
			}return elem;
		}jQuery.extend({htmlPrefilter:function(html){
			return html;
		},clone:function(elem,dataAndEvents,deepDataAndEvents){
			var i,l,srcElements,destElements,clone=elem.cloneNode(true),inPage=isAttached(elem);if(!support.noCloneChecked&&(elem.nodeType===1||elem.nodeType===11)&&!jQuery.isXMLDoc(elem)){
				destElements=getAll(clone);srcElements=getAll(elem);for(i=0,l=srcElements.length;i<l;i++){
					fixInput(srcElements[i],destElements[i]);
				}
			}if(dataAndEvents){
				if(deepDataAndEvents){
					srcElements=srcElements||getAll(elem);destElements=destElements||getAll(clone);for(i=0,l=srcElements.length;i<l;i++){
						cloneCopyEvent(srcElements[i],destElements[i]);
					}
				}else{
					cloneCopyEvent(elem,clone);
				}
			}destElements=getAll(clone,'script');if(destElements.length>0){
				setGlobalEval(destElements,!inPage&&getAll(elem,'script'));
			}return clone;
		},cleanData:function(elems){
			var data,elem,type,special=jQuery.event.special,i=0;for(;(elem=elems[i])!==undefined;i++){
				if(acceptData(elem)){
					if(data=elem[dataPriv.expando]){
						if(data.events){
							for(type in data.events){
								if(special[type]){
									jQuery.event.remove(elem,type);
								}else{
									jQuery.removeEvent(elem,type,data.handle);
								}
							}
						}elem[dataPriv.expando]=undefined;
					}if(elem[dataUser.expando]){
						elem[dataUser.expando]=undefined;
					}
				}
			}
		}});jQuery.fn.extend({detach:function(selector){
			return remove(this,selector,true);
		},remove:function(selector){
			return remove(this,selector);
		},text:function(value){
			return access(this,function(value){
				return value===undefined?jQuery.text(this):this.empty().each(function(){
					if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
						this.textContent=value;
					}
				});
			},null,value,arguments.length);
		},append:function(){
			return domManip(this,arguments,function(elem){
				if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
					var target=manipulationTarget(this,elem);target.appendChild(elem);
				}
			});
		},prepend:function(){
			return domManip(this,arguments,function(elem){
				if(this.nodeType===1||this.nodeType===11||this.nodeType===9){
					var target=manipulationTarget(this,elem);target.insertBefore(elem,target.firstChild);
				}
			});
		},before:function(){
			return domManip(this,arguments,function(elem){
				if(this.parentNode){
					this.parentNode.insertBefore(elem,this);
				}
			});
		},after:function(){
			return domManip(this,arguments,function(elem){
				if(this.parentNode){
					this.parentNode.insertBefore(elem,this.nextSibling);
				}
			});
		},empty:function(){
			var elem,i=0;for(;(elem=this[i])!=null;i++){
				if(elem.nodeType===1){
					jQuery.cleanData(getAll(elem,false));elem.textContent='';
				}
			}return this;
		},clone:function(dataAndEvents,deepDataAndEvents){
			dataAndEvents=dataAndEvents==null?false:dataAndEvents;deepDataAndEvents=deepDataAndEvents==null?dataAndEvents:deepDataAndEvents;return this.map(function(){
				return jQuery.clone(this,dataAndEvents,deepDataAndEvents);
			});
		},html:function(value){
			return access(this,function(value){
				var elem=this[0]||{},i=0,l=this.length;if(value===undefined&&elem.nodeType===1){
					return elem.innerHTML;
				}if(typeof value==='string'&&!rnoInnerhtml.test(value)&&!wrapMap[(rtagName.exec(value)||['',''])[1].toLowerCase()]){
					value=jQuery.htmlPrefilter(value);try{
						for(;i<l;i++){
							elem=this[i]||{};if(elem.nodeType===1){
								jQuery.cleanData(getAll(elem,false));elem.innerHTML=value;
							}
						}elem=0;
					}catch(e){}
				}if(elem){
					this.empty().append(value);
				}
			},null,value,arguments.length);
		},replaceWith:function(){
			var ignored=[];return domManip(this,arguments,function(elem){
				var parent=this.parentNode;if(jQuery.inArray(this,ignored)<0){
					jQuery.cleanData(getAll(this));if(parent){
						parent.replaceChild(elem,this);
					}
				}
			},ignored);
		}});jQuery.each({appendTo:'append',prependTo:'prepend',insertBefore:'before',insertAfter:'after',replaceAll:'replaceWith'},function(name,original){
			jQuery.fn[name]=function(selector){
				var elems,ret=[],insert=jQuery(selector),last=insert.length-1,i=0;for(;i<=last;i++){
					elems=i===last?this:this.clone(true);jQuery(insert[i])[original](elems);push.apply(ret,elems.get());
				}return this.pushStack(ret);
			};
		});var rnumnonpx=new RegExp('^('+pnum+')(?!px)[a-z%]+$','i');var getStyles=function(elem){
			var view=elem.ownerDocument.defaultView;if(!view||!view.opener){
				view=window;
			}return view.getComputedStyle(elem);
		};var swap=function(elem,options,callback){
			var ret,name,old={};for(name in options){
				old[name]=elem.style[name];elem.style[name]=options[name];
			}ret=callback.call(elem);for(name in options){
				elem.style[name]=old[name];
			}return ret;
		};var rboxStyle=new RegExp(cssExpand.join('|'),'i');(function(){
			function computeStyleTests(){
				if(!div){
					return;
				}container.style.cssText='position:absolute;left:-11111px;width:60px;'+'margin-top:1px;padding:0;border:0';div.style.cssText='position:relative;display:block;box-sizing:border-box;overflow:scroll;'+'margin:auto;border:1px;padding:1px;'+'width:60%;top:1%';documentElement.appendChild(container).appendChild(div);var divStyle=window.getComputedStyle(div);pixelPositionVal=divStyle.top!=='1%';reliableMarginLeftVal=roundPixelMeasures(divStyle.marginLeft)===12;div.style.right='60%';pixelBoxStylesVal=roundPixelMeasures(divStyle.right)===36;boxSizingReliableVal=roundPixelMeasures(divStyle.width)===36;div.style.position='absolute';scrollboxSizeVal=roundPixelMeasures(div.offsetWidth/3)===12;documentElement.removeChild(container);div=null;
			}function roundPixelMeasures(measure){
				return Math.round(parseFloat(measure));
			}var pixelPositionVal,boxSizingReliableVal,scrollboxSizeVal,pixelBoxStylesVal,reliableTrDimensionsVal,reliableMarginLeftVal,container=document.createElement('div'),div=document.createElement('div');if(!div.style){
				return;
			}div.style.backgroundClip='content-box';div.cloneNode(true).style.backgroundClip='';support.clearCloneStyle=div.style.backgroundClip==='content-box';jQuery.extend(support,{boxSizingReliable:function(){
				computeStyleTests();return boxSizingReliableVal;
			},pixelBoxStyles:function(){
				computeStyleTests();return pixelBoxStylesVal;
			},pixelPosition:function(){
				computeStyleTests();return pixelPositionVal;
			},reliableMarginLeft:function(){
				computeStyleTests();return reliableMarginLeftVal;
			},scrollboxSize:function(){
				computeStyleTests();return scrollboxSizeVal;
			},reliableTrDimensions:function(){
				var table,tr,trChild,trStyle;if(reliableTrDimensionsVal==null){
					table=document.createElement('table');tr=document.createElement('tr');trChild=document.createElement('div');table.style.cssText='position:absolute;left:-11111px;border-collapse:separate';tr.style.cssText='border:1px solid';tr.style.height='1px';trChild.style.height='9px';trChild.style.display='block';documentElement.appendChild(table).appendChild(tr).appendChild(trChild);trStyle=window.getComputedStyle(tr);reliableTrDimensionsVal=parseInt(trStyle.height,10)+parseInt(trStyle.borderTopWidth,10)+parseInt(trStyle.borderBottomWidth,10)===tr.offsetHeight;documentElement.removeChild(table);
				}return reliableTrDimensionsVal;
			}});
		})();function curCSS(elem,name,computed){
			var width,minWidth,maxWidth,ret,style=elem.style;computed=computed||getStyles(elem);if(computed){
				ret=computed.getPropertyValue(name)||computed[name];if(ret===''&&!isAttached(elem)){
					ret=jQuery.style(elem,name);
				}if(!support.pixelBoxStyles()&&rnumnonpx.test(ret)&&rboxStyle.test(name)){
					width=style.width;minWidth=style.minWidth;maxWidth=style.maxWidth;style.minWidth=style.maxWidth=style.width=ret;ret=computed.width;style.width=width;style.minWidth=minWidth;style.maxWidth=maxWidth;
				}
			}return ret!==undefined?ret+'':ret;
		}function addGetHookIf(conditionFn,hookFn){
			return{get:function(){
				if(conditionFn()){
					delete this.get;return;
				}return(this.get=hookFn).apply(this,arguments);
			}};
		}var cssPrefixes=['Webkit','Moz','ms'],emptyStyle=document.createElement('div').style,vendorProps={};function vendorPropName(name){
			var capName=name[0].toUpperCase()+name.slice(1),i=cssPrefixes.length;while(i--){
				name=cssPrefixes[i]+capName;if(name in emptyStyle){
					return name;
				}
			}
		}function finalPropName(name){
			var final=jQuery.cssProps[name]||vendorProps[name];if(final){
				return final;
			}if(name in emptyStyle){
				return name;
			}return vendorProps[name]=vendorPropName(name)||name;
		}var rdisplayswap=/^(none|table(?!-c[ea]).+)/,rcustomProp=/^--/,cssShow={position:'absolute',visibility:'hidden',display:'block'},cssNormalTransform={letterSpacing:'0',fontWeight:'400'};function setPositiveNumber(_elem,value,subtract){
			var matches=rcssNum.exec(value);return matches?Math.max(0,matches[2]-(subtract||0))+(matches[3]||'px'):value;
		}function boxModelAdjustment(elem,dimension,box,isBorderBox,styles,computedVal){
			var i=dimension==='width'?1:0,extra=0,delta=0;if(box===(isBorderBox?'border':'content')){
				return 0;
			}for(;i<4;i+=2){
				if(box==='margin'){
					delta+=jQuery.css(elem,box+cssExpand[i],true,styles);
				}if(!isBorderBox){
					delta+=jQuery.css(elem,'padding'+cssExpand[i],true,styles);if(box!=='padding'){
						delta+=jQuery.css(elem,'border'+cssExpand[i]+'Width',true,styles);
					}else{
						extra+=jQuery.css(elem,'border'+cssExpand[i]+'Width',true,styles);
					}
				}else{
					if(box==='content'){
						delta-=jQuery.css(elem,'padding'+cssExpand[i],true,styles);
					}if(box!=='margin'){
						delta-=jQuery.css(elem,'border'+cssExpand[i]+'Width',true,styles);
					}
				}
			}if(!isBorderBox&&computedVal>=0){
				delta+=Math.max(0,Math.ceil(elem['offset'+dimension[0].toUpperCase()+dimension.slice(1)]-computedVal-delta-extra-.5))||0;
			}return delta;
		}function getWidthOrHeight(elem,dimension,extra){
			var styles=getStyles(elem),boxSizingNeeded=!support.boxSizingReliable()||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,'boxSizing',false,styles)==='border-box',valueIsBorderBox=isBorderBox,val=curCSS(elem,dimension,styles),offsetProp='offset'+dimension[0].toUpperCase()+dimension.slice(1);if(rnumnonpx.test(val)){
				if(!extra){
					return val;
				}val='auto';
			}if((!support.boxSizingReliable()&&isBorderBox||!support.reliableTrDimensions()&&nodeName(elem,'tr')||val==='auto'||!parseFloat(val)&&jQuery.css(elem,'display',false,styles)==='inline')&&elem.getClientRects().length){
				isBorderBox=jQuery.css(elem,'boxSizing',false,styles)==='border-box';valueIsBorderBox=offsetProp in elem;if(valueIsBorderBox){
					val=elem[offsetProp];
				}
			}val=parseFloat(val)||0;return val+boxModelAdjustment(elem,dimension,extra||(isBorderBox?'border':'content'),valueIsBorderBox,styles,val)+'px';
		}jQuery.extend({cssHooks:{opacity:{get:function(elem,computed){
			if(computed){
				var ret=curCSS(elem,'opacity');return ret===''?'1':ret;
			}
		}}},cssNumber:{animationIterationCount:true,columnCount:true,fillOpacity:true,flexGrow:true,flexShrink:true,fontWeight:true,gridArea:true,gridColumn:true,gridColumnEnd:true,gridColumnStart:true,gridRow:true,gridRowEnd:true,gridRowStart:true,lineHeight:true,opacity:true,order:true,orphans:true,widows:true,zIndex:true,zoom:true},cssProps:{},style:function(elem,name,value,extra){
			if(!elem||elem.nodeType===3||elem.nodeType===8||!elem.style){
				return;
			}var ret,type,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name),style=elem.style;if(!isCustomProp){
				name=finalPropName(origName);
			}hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(value!==undefined){
				type=typeof value;if(type==='string'&&(ret=rcssNum.exec(value))&&ret[1]){
					value=adjustCSS(elem,name,ret);type='number';
				}if(value==null||value!==value){
					return;
				}if(type==='number'&&!isCustomProp){
					value+=ret&&ret[3]||(jQuery.cssNumber[origName]?'':'px');
				}if(!support.clearCloneStyle&&value===''&&name.indexOf('background')===0){
					style[name]='inherit';
				}if(!hooks||!('set'in hooks)||(value=hooks.set(elem,value,extra))!==undefined){
					if(isCustomProp){
						style.setProperty(name,value);
					}else{
						style[name]=value;
					}
				}
			}else{
				if(hooks&&'get'in hooks&&(ret=hooks.get(elem,false,extra))!==undefined){
					return ret;
				}return style[name];
			}
		},css:function(elem,name,extra,styles){
			var val,num,hooks,origName=camelCase(name),isCustomProp=rcustomProp.test(name);if(!isCustomProp){
				name=finalPropName(origName);
			}hooks=jQuery.cssHooks[name]||jQuery.cssHooks[origName];if(hooks&&'get'in hooks){
				val=hooks.get(elem,true,extra);
			}if(val===undefined){
				val=curCSS(elem,name,styles);
			}if(val==='normal'&&name in cssNormalTransform){
				val=cssNormalTransform[name];
			}if(extra===''||extra){
				num=parseFloat(val);return extra===true||isFinite(num)?num||0:val;
			}return val;
		}});jQuery.each(['height','width'],function(_i,dimension){
			jQuery.cssHooks[dimension]={get:function(elem,computed,extra){
				if(computed){
					return rdisplayswap.test(jQuery.css(elem,'display'))&&(!elem.getClientRects().length||!elem.getBoundingClientRect().width)?swap(elem,cssShow,function(){
						return getWidthOrHeight(elem,dimension,extra);
					}):getWidthOrHeight(elem,dimension,extra);
				}
			},set:function(elem,value,extra){
				var matches,styles=getStyles(elem),scrollboxSizeBuggy=!support.scrollboxSize()&&styles.position==='absolute',boxSizingNeeded=scrollboxSizeBuggy||extra,isBorderBox=boxSizingNeeded&&jQuery.css(elem,'boxSizing',false,styles)==='border-box',subtract=extra?boxModelAdjustment(elem,dimension,extra,isBorderBox,styles):0;if(isBorderBox&&scrollboxSizeBuggy){
					subtract-=Math.ceil(elem['offset'+dimension[0].toUpperCase()+dimension.slice(1)]-parseFloat(styles[dimension])-boxModelAdjustment(elem,dimension,'border',false,styles)-.5);
				}if(subtract&&(matches=rcssNum.exec(value))&&(matches[3]||'px')!=='px'){
					elem.style[dimension]=value;value=jQuery.css(elem,dimension);
				}return setPositiveNumber(elem,value,subtract);
			}};
		});jQuery.cssHooks.marginLeft=addGetHookIf(support.reliableMarginLeft,function(elem,computed){
			if(computed){
				return(parseFloat(curCSS(elem,'marginLeft'))||elem.getBoundingClientRect().left-swap(elem,{marginLeft:0},function(){
					return elem.getBoundingClientRect().left;
				}))+'px';
			}
		});jQuery.each({margin:'',padding:'',border:'Width'},function(prefix,suffix){
			jQuery.cssHooks[prefix+suffix]={expand:function(value){
				var i=0,expanded={},parts=typeof value==='string'?value.split(' '):[value];for(;i<4;i++){
					expanded[prefix+cssExpand[i]+suffix]=parts[i]||parts[i-2]||parts[0];
				}return expanded;
			}};if(prefix!=='margin'){
				jQuery.cssHooks[prefix+suffix].set=setPositiveNumber;
			}
		});jQuery.fn.extend({css:function(name,value){
			return access(this,function(elem,name,value){
				var styles,len,map={},i=0;if(Array.isArray(name)){
					styles=getStyles(elem);len=name.length;for(;i<len;i++){
						map[name[i]]=jQuery.css(elem,name[i],false,styles);
					}return map;
				}return value!==undefined?jQuery.style(elem,name,value):jQuery.css(elem,name);
			},name,value,arguments.length>1);
		}});function Tween(elem,options,prop,end,easing){
			return new Tween.prototype.init(elem,options,prop,end,easing);
		}jQuery.Tween=Tween;Tween.prototype={constructor:Tween,init:function(elem,options,prop,end,easing,unit){
			this.elem=elem;this.prop=prop;this.easing=easing||jQuery.easing._default;this.options=options;this.start=this.now=this.cur();this.end=end;this.unit=unit||(jQuery.cssNumber[prop]?'':'px');
		},cur:function(){
			var hooks=Tween.propHooks[this.prop];return hooks&&hooks.get?hooks.get(this):Tween.propHooks._default.get(this);
		},run:function(percent){
			var eased,hooks=Tween.propHooks[this.prop];if(this.options.duration){
				this.pos=eased=jQuery.easing[this.easing](percent,this.options.duration*percent,0,1,this.options.duration);
			}else{
				this.pos=eased=percent;
			}this.now=(this.end-this.start)*eased+this.start;if(this.options.step){
				this.options.step.call(this.elem,this.now,this);
			}if(hooks&&hooks.set){
				hooks.set(this);
			}else{
				Tween.propHooks._default.set(this);
			}return this;
		}};Tween.prototype.init.prototype=Tween.prototype;Tween.propHooks={_default:{get:function(tween){
			var result;if(tween.elem.nodeType!==1||tween.elem[tween.prop]!=null&&tween.elem.style[tween.prop]==null){
				return tween.elem[tween.prop];
			}result=jQuery.css(tween.elem,tween.prop,'');return!result||result==='auto'?0:result;
		},set:function(tween){
			if(jQuery.fx.step[tween.prop]){
				jQuery.fx.step[tween.prop](tween);
			}else if(tween.elem.nodeType===1&&(jQuery.cssHooks[tween.prop]||tween.elem.style[finalPropName(tween.prop)]!=null)){
				jQuery.style(tween.elem,tween.prop,tween.now+tween.unit);
			}else{
				tween.elem[tween.prop]=tween.now;
			}
		}}};Tween.propHooks.scrollTop=Tween.propHooks.scrollLeft={set:function(tween){
			if(tween.elem.nodeType&&tween.elem.parentNode){
				tween.elem[tween.prop]=tween.now;
			}
		}};jQuery.easing={linear:function(p){
			return p;
		},swing:function(p){
			return.5-Math.cos(p*Math.PI)/2;
		},_default:'swing'};jQuery.fx=Tween.prototype.init;jQuery.fx.step={};var fxNow,inProgress,rfxtypes=/^(?:toggle|show|hide)$/,rrun=/queueHooks$/;function schedule(){
			if(inProgress){
				if(document.hidden===false&&window.requestAnimationFrame){
					window.requestAnimationFrame(schedule);
				}else{
					window.setTimeout(schedule,jQuery.fx.interval);
				}jQuery.fx.tick();
			}
		}function createFxNow(){
			window.setTimeout(function(){
				fxNow=undefined;
			});return fxNow=Date.now();
		}function genFx(type,includeWidth){
			var which,i=0,attrs={height:type};includeWidth=includeWidth?1:0;for(;i<4;i+=2-includeWidth){
				which=cssExpand[i];attrs['margin'+which]=attrs['padding'+which]=type;
			}if(includeWidth){
				attrs.opacity=attrs.width=type;
			}return attrs;
		}function createTween(value,prop,animation){
			var tween,collection=(Animation.tweeners[prop]||[]).concat(Animation.tweeners['*']),index=0,length=collection.length;for(;index<length;index++){
				if(tween=collection[index].call(animation,prop,value)){
					return tween;
				}
			}
		}function defaultPrefilter(elem,props,opts){
			var prop,value,toggle,hooks,oldfire,propTween,restoreDisplay,display,isBox='width'in props||'height'in props,anim=this,orig={},style=elem.style,hidden=elem.nodeType&&isHiddenWithinTree(elem),dataShow=dataPriv.get(elem,'fxshow');if(!opts.queue){
				hooks=jQuery._queueHooks(elem,'fx');if(hooks.unqueued==null){
					hooks.unqueued=0;oldfire=hooks.empty.fire;hooks.empty.fire=function(){
						if(!hooks.unqueued){
							oldfire();
						}
					};
				}hooks.unqueued++;anim.always(function(){
					anim.always(function(){
						hooks.unqueued--;if(!jQuery.queue(elem,'fx').length){
							hooks.empty.fire();
						}
					});
				});
			}for(prop in props){
				value=props[prop];if(rfxtypes.test(value)){
					delete props[prop];toggle=toggle||value==='toggle';if(value===(hidden?'hide':'show')){
						if(value==='show'&&dataShow&&dataShow[prop]!==undefined){
							hidden=true;
						}else{
							continue;
						}
					}orig[prop]=dataShow&&dataShow[prop]||jQuery.style(elem,prop);
				}
			}propTween=!jQuery.isEmptyObject(props);if(!propTween&&jQuery.isEmptyObject(orig)){
				return;
			}if(isBox&&elem.nodeType===1){
				opts.overflow=[style.overflow,style.overflowX,style.overflowY];restoreDisplay=dataShow&&dataShow.display;if(restoreDisplay==null){
					restoreDisplay=dataPriv.get(elem,'display');
				}display=jQuery.css(elem,'display');if(display==='none'){
					if(restoreDisplay){
						display=restoreDisplay;
					}else{
						showHide([elem],true);restoreDisplay=elem.style.display||restoreDisplay;display=jQuery.css(elem,'display');showHide([elem]);
					}
				}if(display==='inline'||display==='inline-block'&&restoreDisplay!=null){
					if(jQuery.css(elem,'float')==='none'){
						if(!propTween){
							anim.done(function(){
								style.display=restoreDisplay;
							});if(restoreDisplay==null){
								display=style.display;restoreDisplay=display==='none'?'':display;
							}
						}style.display='inline-block';
					}
				}
			}if(opts.overflow){
				style.overflow='hidden';anim.always(function(){
					style.overflow=opts.overflow[0];style.overflowX=opts.overflow[1];style.overflowY=opts.overflow[2];
				});
			}propTween=false;for(prop in orig){
				if(!propTween){
					if(dataShow){
						if('hidden'in dataShow){
							hidden=dataShow.hidden;
						}
					}else{
						dataShow=dataPriv.access(elem,'fxshow',{display:restoreDisplay});
					}if(toggle){
						dataShow.hidden=!hidden;
					}if(hidden){
						showHide([elem],true);
					}anim.done(function(){
						if(!hidden){
							showHide([elem]);
						}dataPriv.remove(elem,'fxshow');for(prop in orig){
							jQuery.style(elem,prop,orig[prop]);
						}
					});
				}propTween=createTween(hidden?dataShow[prop]:0,prop,anim);if(!(prop in dataShow)){
					dataShow[prop]=propTween.start;if(hidden){
						propTween.end=propTween.start;propTween.start=0;
					}
				}
			}
		}function propFilter(props,specialEasing){
			var index,name,easing,value,hooks;for(index in props){
				name=camelCase(index);easing=specialEasing[name];value=props[index];if(Array.isArray(value)){
					easing=value[1];value=props[index]=value[0];
				}if(index!==name){
					props[name]=value;delete props[index];
				}hooks=jQuery.cssHooks[name];if(hooks&&'expand'in hooks){
					value=hooks.expand(value);delete props[name];for(index in value){
						if(!(index in props)){
							props[index]=value[index];specialEasing[index]=easing;
						}
					}
				}else{
					specialEasing[name]=easing;
				}
			}
		}function Animation(elem,properties,options){
			var result,stopped,index=0,length=Animation.prefilters.length,deferred=jQuery.Deferred().always(function(){
					delete tick.elem;
				}),tick=function(){
					if(stopped){
						return false;
					}var currentTime=fxNow||createFxNow(),remaining=Math.max(0,animation.startTime+animation.duration-currentTime),temp=remaining/animation.duration||0,percent=1-temp,index=0,length=animation.tweens.length;for(;index<length;index++){
						animation.tweens[index].run(percent);
					}deferred.notifyWith(elem,[animation,percent,remaining]);if(percent<1&&length){
						return remaining;
					}if(!length){
						deferred.notifyWith(elem,[animation,1,0]);
					}deferred.resolveWith(elem,[animation]);return false;
				},animation=deferred.promise({elem:elem,props:jQuery.extend({},properties),opts:jQuery.extend(true,{specialEasing:{},easing:jQuery.easing._default},options),originalProperties:properties,originalOptions:options,startTime:fxNow||createFxNow(),duration:options.duration,tweens:[],createTween:function(prop,end){
					var tween=jQuery.Tween(elem,animation.opts,prop,end,animation.opts.specialEasing[prop]||animation.opts.easing);animation.tweens.push(tween);return tween;
				},stop:function(gotoEnd){
					var index=0,length=gotoEnd?animation.tweens.length:0;if(stopped){
						return this;
					}stopped=true;for(;index<length;index++){
						animation.tweens[index].run(1);
					}if(gotoEnd){
						deferred.notifyWith(elem,[animation,1,0]);deferred.resolveWith(elem,[animation,gotoEnd]);
					}else{
						deferred.rejectWith(elem,[animation,gotoEnd]);
					}return this;
				}}),props=animation.props;propFilter(props,animation.opts.specialEasing);for(;index<length;index++){
				result=Animation.prefilters[index].call(animation,elem,props,animation.opts);if(result){
					if(isFunction(result.stop)){
						jQuery._queueHooks(animation.elem,animation.opts.queue).stop=result.stop.bind(result);
					}return result;
				}
			}jQuery.map(props,createTween,animation);if(isFunction(animation.opts.start)){
				animation.opts.start.call(elem,animation);
			}animation.progress(animation.opts.progress).done(animation.opts.done,animation.opts.complete).fail(animation.opts.fail).always(animation.opts.always);jQuery.fx.timer(jQuery.extend(tick,{elem:elem,anim:animation,queue:animation.opts.queue}));return animation;
		}jQuery.Animation=jQuery.extend(Animation,{tweeners:{'*':[function(prop,value){
			var tween=this.createTween(prop,value);adjustCSS(tween.elem,prop,rcssNum.exec(value),tween);return tween;
		}]},tweener:function(props,callback){
			if(isFunction(props)){
				callback=props;props=['*'];
			}else{
				props=props.match(rnothtmlwhite);
			}var prop,index=0,length=props.length;for(;index<length;index++){
				prop=props[index];Animation.tweeners[prop]=Animation.tweeners[prop]||[];Animation.tweeners[prop].unshift(callback);
			}
		},prefilters:[defaultPrefilter],prefilter:function(callback,prepend){
			if(prepend){
				Animation.prefilters.unshift(callback);
			}else{
				Animation.prefilters.push(callback);
			}
		}});jQuery.speed=function(speed,easing,fn){
			var opt=speed&&typeof speed==='object'?jQuery.extend({},speed):{complete:fn||!fn&&easing||isFunction(speed)&&speed,duration:speed,easing:fn&&easing||easing&&!isFunction(easing)&&easing};if(jQuery.fx.off){
				opt.duration=0;
			}else{
				if(typeof opt.duration!=='number'){
					if(opt.duration in jQuery.fx.speeds){
						opt.duration=jQuery.fx.speeds[opt.duration];
					}else{
						opt.duration=jQuery.fx.speeds._default;
					}
				}
			}if(opt.queue==null||opt.queue===true){
				opt.queue='fx';
			}opt.old=opt.complete;opt.complete=function(){
				if(isFunction(opt.old)){
					opt.old.call(this);
				}if(opt.queue){
					jQuery.dequeue(this,opt.queue);
				}
			};return opt;
		};jQuery.fn.extend({fadeTo:function(speed,to,easing,callback){
			return this.filter(isHiddenWithinTree).css('opacity',0).show().end().animate({opacity:to},speed,easing,callback);
		},animate:function(prop,speed,easing,callback){
			var empty=jQuery.isEmptyObject(prop),optall=jQuery.speed(speed,easing,callback),doAnimation=function(){
				var anim=Animation(this,jQuery.extend({},prop),optall);if(empty||dataPriv.get(this,'finish')){
					anim.stop(true);
				}
			};doAnimation.finish=doAnimation;return empty||optall.queue===false?this.each(doAnimation):this.queue(optall.queue,doAnimation);
		},stop:function(type,clearQueue,gotoEnd){
			var stopQueue=function(hooks){
				var stop=hooks.stop;delete hooks.stop;stop(gotoEnd);
			};if(typeof type!=='string'){
				gotoEnd=clearQueue;clearQueue=type;type=undefined;
			}if(clearQueue){
				this.queue(type||'fx',[]);
			}return this.each(function(){
				var dequeue=true,index=type!=null&&type+'queueHooks',timers=jQuery.timers,data=dataPriv.get(this);if(index){
					if(data[index]&&data[index].stop){
						stopQueue(data[index]);
					}
				}else{
					for(index in data){
						if(data[index]&&data[index].stop&&rrun.test(index)){
							stopQueue(data[index]);
						}
					}
				}for(index=timers.length;index--;){
					if(timers[index].elem===this&&(type==null||timers[index].queue===type)){
						timers[index].anim.stop(gotoEnd);dequeue=false;timers.splice(index,1);
					}
				}if(dequeue||!gotoEnd){
					jQuery.dequeue(this,type);
				}
			});
		},finish:function(type){
			if(type!==false){
				type=type||'fx';
			}return this.each(function(){
				var index,data=dataPriv.get(this),queue=data[type+'queue'],hooks=data[type+'queueHooks'],timers=jQuery.timers,length=queue?queue.length:0;data.finish=true;jQuery.queue(this,type,[]);if(hooks&&hooks.stop){
					hooks.stop.call(this,true);
				}for(index=timers.length;index--;){
					if(timers[index].elem===this&&timers[index].queue===type){
						timers[index].anim.stop(true);timers.splice(index,1);
					}
				}for(index=0;index<length;index++){
					if(queue[index]&&queue[index].finish){
						queue[index].finish.call(this);
					}
				}delete data.finish;
			});
		}});jQuery.each(['toggle','show','hide'],function(_i,name){
			var cssFn=jQuery.fn[name];jQuery.fn[name]=function(speed,easing,callback){
				return speed==null||typeof speed==='boolean'?cssFn.apply(this,arguments):this.animate(genFx(name,true),speed,easing,callback);
			};
		});jQuery.each({slideDown:genFx('show'),slideUp:genFx('hide'),slideToggle:genFx('toggle'),fadeIn:{opacity:'show'},fadeOut:{opacity:'hide'},fadeToggle:{opacity:'toggle'}},function(name,props){
			jQuery.fn[name]=function(speed,easing,callback){
				return this.animate(props,speed,easing,callback);
			};
		});jQuery.timers=[];jQuery.fx.tick=function(){
			var timer,i=0,timers=jQuery.timers;fxNow=Date.now();for(;i<timers.length;i++){
				timer=timers[i];if(!timer()&&timers[i]===timer){
					timers.splice(i--,1);
				}
			}if(!timers.length){
				jQuery.fx.stop();
			}fxNow=undefined;
		};jQuery.fx.timer=function(timer){
			jQuery.timers.push(timer);jQuery.fx.start();
		};jQuery.fx.interval=13;jQuery.fx.start=function(){
			if(inProgress){
				return;
			}inProgress=true;schedule();
		};jQuery.fx.stop=function(){
			inProgress=null;
		};jQuery.fx.speeds={slow:600,fast:200,_default:400};jQuery.fn.delay=function(time,type){
			time=jQuery.fx?jQuery.fx.speeds[time]||time:time;type=type||'fx';return this.queue(type,function(next,hooks){
				var timeout=window.setTimeout(next,time);hooks.stop=function(){
					window.clearTimeout(timeout);
				};
			});
		};(function(){
			var input=document.createElement('input'),select=document.createElement('select'),opt=select.appendChild(document.createElement('option'));input.type='checkbox';support.checkOn=input.value!=='';support.optSelected=opt.selected;input=document.createElement('input');input.value='t';input.type='radio';support.radioValue=input.value==='t';
		})();var boolHook,attrHandle=jQuery.expr.attrHandle;jQuery.fn.extend({attr:function(name,value){
			return access(this,jQuery.attr,name,value,arguments.length>1);
		},removeAttr:function(name){
			return this.each(function(){
				jQuery.removeAttr(this,name);
			});
		}});jQuery.extend({attr:function(elem,name,value){
			var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){
				return;
			}if(typeof elem.getAttribute==='undefined'){
				return jQuery.prop(elem,name,value);
			}if(nType!==1||!jQuery.isXMLDoc(elem)){
				hooks=jQuery.attrHooks[name.toLowerCase()]||(jQuery.expr.match.bool.test(name)?boolHook:undefined);
			}if(value!==undefined){
				if(value===null){
					jQuery.removeAttr(elem,name);return;
				}if(hooks&&'set'in hooks&&(ret=hooks.set(elem,value,name))!==undefined){
					return ret;
				}elem.setAttribute(name,value+'');return value;
			}if(hooks&&'get'in hooks&&(ret=hooks.get(elem,name))!==null){
				return ret;
			}ret=jQuery.find.attr(elem,name);return ret==null?undefined:ret;
		},attrHooks:{type:{set:function(elem,value){
			if(!support.radioValue&&value==='radio'&&nodeName(elem,'input')){
				var val=elem.value;elem.setAttribute('type',value);if(val){
					elem.value=val;
				}return value;
			}
		}}},removeAttr:function(elem,value){
			var name,i=0,attrNames=value&&value.match(rnothtmlwhite);if(attrNames&&elem.nodeType===1){
				while(name=attrNames[i++]){
					elem.removeAttribute(name);
				}
			}
		}});boolHook={set:function(elem,value,name){
			if(value===false){
				jQuery.removeAttr(elem,name);
			}else{
				elem.setAttribute(name,name);
			}return name;
		}};jQuery.each(jQuery.expr.match.bool.source.match(/\w+/g),function(_i,name){
			var getter=attrHandle[name]||jQuery.find.attr;attrHandle[name]=function(elem,name,isXML){
				var ret,handle,lowercaseName=name.toLowerCase();if(!isXML){
					handle=attrHandle[lowercaseName];attrHandle[lowercaseName]=ret;ret=getter(elem,name,isXML)!=null?lowercaseName:null;attrHandle[lowercaseName]=handle;
				}return ret;
			};
		});var rfocusable=/^(?:input|select|textarea|button)$/i,rclickable=/^(?:a|area)$/i;jQuery.fn.extend({prop:function(name,value){
			return access(this,jQuery.prop,name,value,arguments.length>1);
		},removeProp:function(name){
			return this.each(function(){
				delete this[jQuery.propFix[name]||name];
			});
		}});jQuery.extend({prop:function(elem,name,value){
			var ret,hooks,nType=elem.nodeType;if(nType===3||nType===8||nType===2){
				return;
			}if(nType!==1||!jQuery.isXMLDoc(elem)){
				name=jQuery.propFix[name]||name;hooks=jQuery.propHooks[name];
			}if(value!==undefined){
				if(hooks&&'set'in hooks&&(ret=hooks.set(elem,value,name))!==undefined){
					return ret;
				}return elem[name]=value;
			}if(hooks&&'get'in hooks&&(ret=hooks.get(elem,name))!==null){
				return ret;
			}return elem[name];
		},propHooks:{tabIndex:{get:function(elem){
			var tabindex=jQuery.find.attr(elem,'tabindex');if(tabindex){
				return parseInt(tabindex,10);
			}if(rfocusable.test(elem.nodeName)||rclickable.test(elem.nodeName)&&elem.href){
				return 0;
			}return-1;
		}}},propFix:{for:'htmlFor',class:'className'}});if(!support.optSelected){
			jQuery.propHooks.selected={get:function(elem){
				var parent=elem.parentNode;if(parent&&parent.parentNode){
					parent.parentNode.selectedIndex;
				}return null;
			},set:function(elem){
				var parent=elem.parentNode;if(parent){
					parent.selectedIndex;if(parent.parentNode){
						parent.parentNode.selectedIndex;
					}
				}
			}};
		}jQuery.each(['tabIndex','readOnly','maxLength','cellSpacing','cellPadding','rowSpan','colSpan','useMap','frameBorder','contentEditable'],function(){
			jQuery.propFix[this.toLowerCase()]=this;
		});function stripAndCollapse(value){
			var tokens=value.match(rnothtmlwhite)||[];return tokens.join(' ');
		}function getClass(elem){
			return elem.getAttribute&&elem.getAttribute('class')||'';
		}function classesToArray(value){
			if(Array.isArray(value)){
				return value;
			}if(typeof value==='string'){
				return value.match(rnothtmlwhite)||[];
			}return[];
		}jQuery.fn.extend({addClass:function(value){
			var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){
				return this.each(function(j){
					jQuery(this).addClass(value.call(this,j,getClass(this)));
				});
			}classes=classesToArray(value);if(classes.length){
				while(elem=this[i++]){
					curValue=getClass(elem);cur=elem.nodeType===1&&' '+stripAndCollapse(curValue)+' ';if(cur){
						j=0;while(clazz=classes[j++]){
							if(cur.indexOf(' '+clazz+' ')<0){
								cur+=clazz+' ';
							}
						}finalValue=stripAndCollapse(cur);if(curValue!==finalValue){
							elem.setAttribute('class',finalValue);
						}
					}
				}
			}return this;
		},removeClass:function(value){
			var classes,elem,cur,curValue,clazz,j,finalValue,i=0;if(isFunction(value)){
				return this.each(function(j){
					jQuery(this).removeClass(value.call(this,j,getClass(this)));
				});
			}if(!arguments.length){
				return this.attr('class','');
			}classes=classesToArray(value);if(classes.length){
				while(elem=this[i++]){
					curValue=getClass(elem);cur=elem.nodeType===1&&' '+stripAndCollapse(curValue)+' ';if(cur){
						j=0;while(clazz=classes[j++]){
							while(cur.indexOf(' '+clazz+' ')>-1){
								cur=cur.replace(' '+clazz+' ',' ');
							}
						}finalValue=stripAndCollapse(cur);if(curValue!==finalValue){
							elem.setAttribute('class',finalValue);
						}
					}
				}
			}return this;
		},toggleClass:function(value,stateVal){
			var type=typeof value,isValidValue=type==='string'||Array.isArray(value);if(typeof stateVal==='boolean'&&isValidValue){
				return stateVal?this.addClass(value):this.removeClass(value);
			}if(isFunction(value)){
				return this.each(function(i){
					jQuery(this).toggleClass(value.call(this,i,getClass(this),stateVal),stateVal);
				});
			}return this.each(function(){
				var className,i,self,classNames;if(isValidValue){
					i=0;self=jQuery(this);classNames=classesToArray(value);while(className=classNames[i++]){
						if(self.hasClass(className)){
							self.removeClass(className);
						}else{
							self.addClass(className);
						}
					}
				}else if(value===undefined||type==='boolean'){
					className=getClass(this);if(className){
						dataPriv.set(this,'__className__',className);
					}if(this.setAttribute){
						this.setAttribute('class',className||value===false?'':dataPriv.get(this,'__className__')||'');
					}
				}
			});
		},hasClass:function(selector){
			var className,elem,i=0;className=' '+selector+' ';while(elem=this[i++]){
				if(elem.nodeType===1&&(' '+stripAndCollapse(getClass(elem))+' ').indexOf(className)>-1){
					return true;
				}
			}return false;
		}});var rreturn=/\r/g;jQuery.fn.extend({val:function(value){
			var hooks,ret,valueIsFunction,elem=this[0];if(!arguments.length){
				if(elem){
					hooks=jQuery.valHooks[elem.type]||jQuery.valHooks[elem.nodeName.toLowerCase()];if(hooks&&'get'in hooks&&(ret=hooks.get(elem,'value'))!==undefined){
						return ret;
					}ret=elem.value;if(typeof ret==='string'){
						return ret.replace(rreturn,'');
					}return ret==null?'':ret;
				}return;
			}valueIsFunction=isFunction(value);return this.each(function(i){
				var val;if(this.nodeType!==1){
					return;
				}if(valueIsFunction){
					val=value.call(this,i,jQuery(this).val());
				}else{
					val=value;
				}if(val==null){
					val='';
				}else if(typeof val==='number'){
					val+='';
				}else if(Array.isArray(val)){
					val=jQuery.map(val,function(value){
						return value==null?'':value+'';
					});
				}hooks=jQuery.valHooks[this.type]||jQuery.valHooks[this.nodeName.toLowerCase()];if(!hooks||!('set'in hooks)||hooks.set(this,val,'value')===undefined){
					this.value=val;
				}
			});
		}});jQuery.extend({valHooks:{option:{get:function(elem){
			var val=jQuery.find.attr(elem,'value');return val!=null?val:stripAndCollapse(jQuery.text(elem));
		}},select:{get:function(elem){
			var value,option,i,options=elem.options,index=elem.selectedIndex,one=elem.type==='select-one',values=one?null:[],max=one?index+1:options.length;if(index<0){
				i=max;
			}else{
				i=one?index:0;
			}for(;i<max;i++){
				option=options[i];if((option.selected||i===index)&&!option.disabled&&(!option.parentNode.disabled||!nodeName(option.parentNode,'optgroup'))){
					value=jQuery(option).val();if(one){
						return value;
					}values.push(value);
				}
			}return values;
		},set:function(elem,value){
			var optionSet,option,options=elem.options,values=jQuery.makeArray(value),i=options.length;while(i--){
				option=options[i];if(option.selected=jQuery.inArray(jQuery.valHooks.option.get(option),values)>-1){
					optionSet=true;
				}
			}if(!optionSet){
				elem.selectedIndex=-1;
			}return values;
		}}}});jQuery.each(['radio','checkbox'],function(){
			jQuery.valHooks[this]={set:function(elem,value){
				if(Array.isArray(value)){
					return elem.checked=jQuery.inArray(jQuery(elem).val(),value)>-1;
				}
			}};if(!support.checkOn){
				jQuery.valHooks[this].get=function(elem){
					return elem.getAttribute('value')===null?'on':elem.value;
				};
			}
		});support.focusin='onfocusin'in window;var rfocusMorph=/^(?:focusinfocus|focusoutblur)$/,stopPropagationCallback=function(e){
			e.stopPropagation();
		};jQuery.extend(jQuery.event,{trigger:function(event,data,elem,onlyHandlers){
			var i,cur,tmp,bubbleType,ontype,handle,special,lastElement,eventPath=[elem||document],type=hasOwn.call(event,'type')?event.type:event,namespaces=hasOwn.call(event,'namespace')?event.namespace.split('.'):[];cur=lastElement=tmp=elem=elem||document;if(elem.nodeType===3||elem.nodeType===8){
				return;
			}if(rfocusMorph.test(type+jQuery.event.triggered)){
				return;
			}if(type.indexOf('.')>-1){
				namespaces=type.split('.');type=namespaces.shift();namespaces.sort();
			}ontype=type.indexOf(':')<0&&'on'+type;event=event[jQuery.expando]?event:new jQuery.Event(type,typeof event==='object'&&event);event.isTrigger=onlyHandlers?2:3;event.namespace=namespaces.join('.');event.rnamespace=event.namespace?new RegExp('(^|\\.)'+namespaces.join('\\.(?:.*\\.|)')+'(\\.|$)'):null;event.result=undefined;if(!event.target){
				event.target=elem;
			}data=data==null?[event]:jQuery.makeArray(data,[event]);special=jQuery.event.special[type]||{};if(!onlyHandlers&&special.trigger&&special.trigger.apply(elem,data)===false){
				return;
			}if(!onlyHandlers&&!special.noBubble&&!isWindow(elem)){
				bubbleType=special.delegateType||type;if(!rfocusMorph.test(bubbleType+type)){
					cur=cur.parentNode;
				}for(;cur;cur=cur.parentNode){
					eventPath.push(cur);tmp=cur;
				}if(tmp===(elem.ownerDocument||document)){
					eventPath.push(tmp.defaultView||tmp.parentWindow||window);
				}
			}i=0;while((cur=eventPath[i++])&&!event.isPropagationStopped()){
				lastElement=cur;event.type=i>1?bubbleType:special.bindType||type;handle=(dataPriv.get(cur,'events')||Object.create(null))[event.type]&&dataPriv.get(cur,'handle');if(handle){
					handle.apply(cur,data);
				}handle=ontype&&cur[ontype];if(handle&&handle.apply&&acceptData(cur)){
					event.result=handle.apply(cur,data);if(event.result===false){
						event.preventDefault();
					}
				}
			}event.type=type;if(!onlyHandlers&&!event.isDefaultPrevented()){
				if((!special._default||special._default.apply(eventPath.pop(),data)===false)&&acceptData(elem)){
					if(ontype&&isFunction(elem[type])&&!isWindow(elem)){
						tmp=elem[ontype];if(tmp){
							elem[ontype]=null;
						}jQuery.event.triggered=type;if(event.isPropagationStopped()){
							lastElement.addEventListener(type,stopPropagationCallback);
						}elem[type]();if(event.isPropagationStopped()){
							lastElement.removeEventListener(type,stopPropagationCallback);
						}jQuery.event.triggered=undefined;if(tmp){
							elem[ontype]=tmp;
						}
					}
				}
			}return event.result;
		},simulate:function(type,elem,event){
			var e=jQuery.extend(new jQuery.Event,event,{type:type,isSimulated:true});jQuery.event.trigger(e,null,elem);
		}});jQuery.fn.extend({trigger:function(type,data){
			return this.each(function(){
				jQuery.event.trigger(type,data,this);
			});
		},triggerHandler:function(type,data){
			var elem=this[0];if(elem){
				return jQuery.event.trigger(type,data,elem,true);
			}
		}});if(!support.focusin){
			jQuery.each({focus:'focusin',blur:'focusout'},function(orig,fix){
				var handler=function(event){
					jQuery.event.simulate(fix,event.target,jQuery.event.fix(event));
				};jQuery.event.special[fix]={setup:function(){
					var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix);if(!attaches){
						doc.addEventListener(orig,handler,true);
					}dataPriv.access(doc,fix,(attaches||0)+1);
				},teardown:function(){
					var doc=this.ownerDocument||this.document||this,attaches=dataPriv.access(doc,fix)-1;if(!attaches){
						doc.removeEventListener(orig,handler,true);dataPriv.remove(doc,fix);
					}else{
						dataPriv.access(doc,fix,attaches);
					}
				}};
			});
		}var location=window.location;var nonce={guid:Date.now()};var rquery=/\?/;jQuery.parseXML=function(data){
			var xml,parserErrorElem;if(!data||typeof data!=='string'){
				return null;
			}try{
				xml=(new window.DOMParser).parseFromString(data,'text/xml');
			}catch(e){}parserErrorElem=xml&&xml.getElementsByTagName('parsererror')[0];if(!xml||parserErrorElem){
				jQuery.error('Invalid XML: '+(parserErrorElem?jQuery.map(parserErrorElem.childNodes,function(el){
					return el.textContent;
				}).join('\n'):data));
			}return xml;
		};var rbracket=/\[\]$/,rCRLF=/\r?\n/g,rsubmitterTypes=/^(?:submit|button|image|reset|file)$/i,rsubmittable=/^(?:input|select|textarea|keygen)/i;function buildParams(prefix,obj,traditional,add){
			var name;if(Array.isArray(obj)){
				jQuery.each(obj,function(i,v){
					if(traditional||rbracket.test(prefix)){
						add(prefix,v);
					}else{
						buildParams(prefix+'['+(typeof v==='object'&&v!=null?i:'')+']',v,traditional,add);
					}
				});
			}else if(!traditional&&toType(obj)==='object'){
				for(name in obj){
					buildParams(prefix+'['+name+']',obj[name],traditional,add);
				}
			}else{
				add(prefix,obj);
			}
		}jQuery.param=function(a,traditional){
			var prefix,s=[],add=function(key,valueOrFunction){
				var value=isFunction(valueOrFunction)?valueOrFunction():valueOrFunction;s[s.length]=encodeURIComponent(key)+'='+encodeURIComponent(value==null?'':value);
			};if(a==null){
				return'';
			}if(Array.isArray(a)||a.jquery&&!jQuery.isPlainObject(a)){
				jQuery.each(a,function(){
					add(this.name,this.value);
				});
			}else{
				for(prefix in a){
					buildParams(prefix,a[prefix],traditional,add);
				}
			}return s.join('&');
		};jQuery.fn.extend({serialize:function(){
			return jQuery.param(this.serializeArray());
		},serializeArray:function(){
			return this.map(function(){
				var elements=jQuery.prop(this,'elements');return elements?jQuery.makeArray(elements):this;
			}).filter(function(){
				var type=this.type;return this.name&&!jQuery(this).is(':disabled')&&rsubmittable.test(this.nodeName)&&!rsubmitterTypes.test(type)&&(this.checked||!rcheckableType.test(type));
			}).map(function(_i,elem){
				var val=jQuery(this).val();if(val==null){
					return null;
				}if(Array.isArray(val)){
					return jQuery.map(val,function(val){
						return{name:elem.name,value:val.replace(rCRLF,'\r\n')};
					});
				}return{name:elem.name,value:val.replace(rCRLF,'\r\n')};
			}).get();
		}});var r20=/%20/g,rhash=/#.*$/,rantiCache=/([?&])_=[^&]*/,rheaders=/^(.*?):[ \t]*([^\r\n]*)$/gm,rlocalProtocol=/^(?:about|app|app-storage|.+-extension|file|res|widget):$/,rnoContent=/^(?:GET|HEAD)$/,rprotocol=/^\/\//,prefilters={},transports={},allTypes='*/'.concat('*'),originAnchor=document.createElement('a');originAnchor.href=location.href;function addToPrefiltersOrTransports(structure){
			return function(dataTypeExpression,func){
				if(typeof dataTypeExpression!=='string'){
					func=dataTypeExpression;dataTypeExpression='*';
				}var dataType,i=0,dataTypes=dataTypeExpression.toLowerCase().match(rnothtmlwhite)||[];if(isFunction(func)){
					while(dataType=dataTypes[i++]){
						if(dataType[0]==='+'){
							dataType=dataType.slice(1)||'*';(structure[dataType]=structure[dataType]||[]).unshift(func);
						}else{
							(structure[dataType]=structure[dataType]||[]).push(func);
						}
					}
				}
			};
		}function inspectPrefiltersOrTransports(structure,options,originalOptions,jqXHR){
			var inspected={},seekingTransport=structure===transports;function inspect(dataType){
				var selected;inspected[dataType]=true;jQuery.each(structure[dataType]||[],function(_,prefilterOrFactory){
					var dataTypeOrTransport=prefilterOrFactory(options,originalOptions,jqXHR);if(typeof dataTypeOrTransport==='string'&&!seekingTransport&&!inspected[dataTypeOrTransport]){
						options.dataTypes.unshift(dataTypeOrTransport);inspect(dataTypeOrTransport);return false;
					}else if(seekingTransport){
						return!(selected=dataTypeOrTransport);
					}
				});return selected;
			}return inspect(options.dataTypes[0])||!inspected['*']&&inspect('*');
		}function ajaxExtend(target,src){
			var key,deep,flatOptions=jQuery.ajaxSettings.flatOptions||{};for(key in src){
				if(src[key]!==undefined){
					(flatOptions[key]?target:deep||(deep={}))[key]=src[key];
				}
			}if(deep){
				jQuery.extend(true,target,deep);
			}return target;
		}function ajaxHandleResponses(s,jqXHR,responses){
			var ct,type,finalDataType,firstDataType,contents=s.contents,dataTypes=s.dataTypes;while(dataTypes[0]==='*'){
				dataTypes.shift();if(ct===undefined){
					ct=s.mimeType||jqXHR.getResponseHeader('Content-Type');
				}
			}if(ct){
				for(type in contents){
					if(contents[type]&&contents[type].test(ct)){
						dataTypes.unshift(type);break;
					}
				}
			}if(dataTypes[0]in responses){
				finalDataType=dataTypes[0];
			}else{
				for(type in responses){
					if(!dataTypes[0]||s.converters[type+' '+dataTypes[0]]){
						finalDataType=type;break;
					}if(!firstDataType){
						firstDataType=type;
					}
				}finalDataType=finalDataType||firstDataType;
			}if(finalDataType){
				if(finalDataType!==dataTypes[0]){
					dataTypes.unshift(finalDataType);
				}return responses[finalDataType];
			}
		}function ajaxConvert(s,response,jqXHR,isSuccess){
			var conv2,current,conv,tmp,prev,converters={},dataTypes=s.dataTypes.slice();if(dataTypes[1]){
				for(conv in s.converters){
					converters[conv.toLowerCase()]=s.converters[conv];
				}
			}current=dataTypes.shift();while(current){
				if(s.responseFields[current]){
					jqXHR[s.responseFields[current]]=response;
				}if(!prev&&isSuccess&&s.dataFilter){
					response=s.dataFilter(response,s.dataType);
				}prev=current;current=dataTypes.shift();if(current){
					if(current==='*'){
						current=prev;
					}else if(prev!=='*'&&prev!==current){
						conv=converters[prev+' '+current]||converters['* '+current];if(!conv){
							for(conv2 in converters){
								tmp=conv2.split(' ');if(tmp[1]===current){
									conv=converters[prev+' '+tmp[0]]||converters['* '+tmp[0]];if(conv){
										if(conv===true){
											conv=converters[conv2];
										}else if(converters[conv2]!==true){
											current=tmp[0];dataTypes.unshift(tmp[1]);
										}break;
									}
								}
							}
						}if(conv!==true){
							if(conv&&s.throws){
								response=conv(response);
							}else{
								try{
									response=conv(response);
								}catch(e){
									return{state:'parsererror',error:conv?e:'No conversion from '+prev+' to '+current};
								}
							}
						}
					}
				}
			}return{state:'success',data:response};
		}jQuery.extend({active:0,lastModified:{},etag:{},ajaxSettings:{url:location.href,type:'GET',isLocal:rlocalProtocol.test(location.protocol),global:true,processData:true,async:true,contentType:'application/x-www-form-urlencoded; charset=UTF-8',accepts:{'*':allTypes,text:'text/plain',html:'text/html',xml:'application/xml, text/xml',json:'application/json, text/javascript'},contents:{xml:/\bxml\b/,html:/\bhtml/,json:/\bjson\b/},responseFields:{xml:'responseXML',text:'responseText',json:'responseJSON'},converters:{'* text':String,'text html':true,'text json':JSON.parse,'text xml':jQuery.parseXML},flatOptions:{url:true,context:true}},ajaxSetup:function(target,settings){
			return settings?ajaxExtend(ajaxExtend(target,jQuery.ajaxSettings),settings):ajaxExtend(jQuery.ajaxSettings,target);
		},ajaxPrefilter:addToPrefiltersOrTransports(prefilters),ajaxTransport:addToPrefiltersOrTransports(transports),ajax:function(url,options){
			if(typeof url==='object'){
				options=url;url=undefined;
			}options=options||{};var transport,cacheURL,responseHeadersString,responseHeaders,timeoutTimer,urlAnchor,completed,fireGlobals,i,uncached,s=jQuery.ajaxSetup({},options),callbackContext=s.context||s,globalEventContext=s.context&&(callbackContext.nodeType||callbackContext.jquery)?jQuery(callbackContext):jQuery.event,deferred=jQuery.Deferred(),completeDeferred=jQuery.Callbacks('once memory'),statusCode=s.statusCode||{},requestHeaders={},requestHeadersNames={},strAbort='canceled',jqXHR={readyState:0,getResponseHeader:function(key){
				var match;if(completed){
					if(!responseHeaders){
						responseHeaders={};while(match=rheaders.exec(responseHeadersString)){
							responseHeaders[match[1].toLowerCase()+' ']=(responseHeaders[match[1].toLowerCase()+' ']||[]).concat(match[2]);
						}
					}match=responseHeaders[key.toLowerCase()+' '];
				}return match==null?null:match.join(', ');
			},getAllResponseHeaders:function(){
				return completed?responseHeadersString:null;
			},setRequestHeader:function(name,value){
				if(completed==null){
					name=requestHeadersNames[name.toLowerCase()]=requestHeadersNames[name.toLowerCase()]||name;requestHeaders[name]=value;
				}return this;
			},overrideMimeType:function(type){
				if(completed==null){
					s.mimeType=type;
				}return this;
			},statusCode:function(map){
				var code;if(map){
					if(completed){
						jqXHR.always(map[jqXHR.status]);
					}else{
						for(code in map){
							statusCode[code]=[statusCode[code],map[code]];
						}
					}
				}return this;
			},abort:function(statusText){
				var finalText=statusText||strAbort;if(transport){
					transport.abort(finalText);
				}done(0,finalText);return this;
			}};deferred.promise(jqXHR);s.url=((url||s.url||location.href)+'').replace(rprotocol,location.protocol+'//');s.type=options.method||options.type||s.method||s.type;s.dataTypes=(s.dataType||'*').toLowerCase().match(rnothtmlwhite)||[''];if(s.crossDomain==null){
				urlAnchor=document.createElement('a');try{
					urlAnchor.href=s.url;urlAnchor.href=urlAnchor.href;s.crossDomain=originAnchor.protocol+'//'+originAnchor.host!==urlAnchor.protocol+'//'+urlAnchor.host;
				}catch(e){
					s.crossDomain=true;
				}
			}if(s.data&&s.processData&&typeof s.data!=='string'){
				s.data=jQuery.param(s.data,s.traditional);
			}inspectPrefiltersOrTransports(prefilters,s,options,jqXHR);if(completed){
				return jqXHR;
			}fireGlobals=jQuery.event&&s.global;if(fireGlobals&&jQuery.active++===0){
				jQuery.event.trigger('ajaxStart');
			}s.type=s.type.toUpperCase();s.hasContent=!rnoContent.test(s.type);cacheURL=s.url.replace(rhash,'');if(!s.hasContent){
				uncached=s.url.slice(cacheURL.length);if(s.data&&(s.processData||typeof s.data==='string')){
					cacheURL+=(rquery.test(cacheURL)?'&':'?')+s.data;delete s.data;
				}if(s.cache===false){
					cacheURL=cacheURL.replace(rantiCache,'$1');uncached=(rquery.test(cacheURL)?'&':'?')+'_='+nonce.guid+++uncached;
				}s.url=cacheURL+uncached;
			}else if(s.data&&s.processData&&(s.contentType||'').indexOf('application/x-www-form-urlencoded')===0){
				s.data=s.data.replace(r20,'+');
			}if(s.ifModified){
				if(jQuery.lastModified[cacheURL]){
					jqXHR.setRequestHeader('If-Modified-Since',jQuery.lastModified[cacheURL]);
				}if(jQuery.etag[cacheURL]){
					jqXHR.setRequestHeader('If-None-Match',jQuery.etag[cacheURL]);
				}
			}if(s.data&&s.hasContent&&s.contentType!==false||options.contentType){
				jqXHR.setRequestHeader('Content-Type',s.contentType);
			}jqXHR.setRequestHeader('Accept',s.dataTypes[0]&&s.accepts[s.dataTypes[0]]?s.accepts[s.dataTypes[0]]+(s.dataTypes[0]!=='*'?', '+allTypes+'; q=0.01':''):s.accepts['*']);for(i in s.headers){
				jqXHR.setRequestHeader(i,s.headers[i]);
			}if(s.beforeSend&&(s.beforeSend.call(callbackContext,jqXHR,s)===false||completed)){
				return jqXHR.abort();
			}strAbort='abort';completeDeferred.add(s.complete);jqXHR.done(s.success);jqXHR.fail(s.error);transport=inspectPrefiltersOrTransports(transports,s,options,jqXHR);if(!transport){
				done(-1,'No Transport');
			}else{
				jqXHR.readyState=1;if(fireGlobals){
					globalEventContext.trigger('ajaxSend',[jqXHR,s]);
				}if(completed){
					return jqXHR;
				}if(s.async&&s.timeout>0){
					timeoutTimer=window.setTimeout(function(){
						jqXHR.abort('timeout');
					},s.timeout);
				}try{
					completed=false;transport.send(requestHeaders,done);
				}catch(e){
					if(completed){
						throw e;
					}done(-1,e);
				}
			}function done(status,nativeStatusText,responses,headers){
				var isSuccess,success,error,response,modified,statusText=nativeStatusText;if(completed){
					return;
				}completed=true;if(timeoutTimer){
					window.clearTimeout(timeoutTimer);
				}transport=undefined;responseHeadersString=headers||'';jqXHR.readyState=status>0?4:0;isSuccess=status>=200&&status<300||status===304;if(responses){
					response=ajaxHandleResponses(s,jqXHR,responses);
				}if(!isSuccess&&jQuery.inArray('script',s.dataTypes)>-1&&jQuery.inArray('json',s.dataTypes)<0){
					s.converters['text script']=function(){};
				}response=ajaxConvert(s,response,jqXHR,isSuccess);if(isSuccess){
					if(s.ifModified){
						modified=jqXHR.getResponseHeader('Last-Modified');if(modified){
							jQuery.lastModified[cacheURL]=modified;
						}modified=jqXHR.getResponseHeader('etag');if(modified){
							jQuery.etag[cacheURL]=modified;
						}
					}if(status===204||s.type==='HEAD'){
						statusText='nocontent';
					}else if(status===304){
						statusText='notmodified';
					}else{
						statusText=response.state;success=response.data;error=response.error;isSuccess=!error;
					}
				}else{
					error=statusText;if(status||!statusText){
						statusText='error';if(status<0){
							status=0;
						}
					}
				}jqXHR.status=status;jqXHR.statusText=(nativeStatusText||statusText)+'';if(isSuccess){
					deferred.resolveWith(callbackContext,[success,statusText,jqXHR]);
				}else{
					deferred.rejectWith(callbackContext,[jqXHR,statusText,error]);
				}jqXHR.statusCode(statusCode);statusCode=undefined;if(fireGlobals){
					globalEventContext.trigger(isSuccess?'ajaxSuccess':'ajaxError',[jqXHR,s,isSuccess?success:error]);
				}completeDeferred.fireWith(callbackContext,[jqXHR,statusText]);if(fireGlobals){
					globalEventContext.trigger('ajaxComplete',[jqXHR,s]);if(!--jQuery.active){
						jQuery.event.trigger('ajaxStop');
					}
				}
			}return jqXHR;
		},getJSON:function(url,data,callback){
			return jQuery.get(url,data,callback,'json');
		},getScript:function(url,callback){
			return jQuery.get(url,undefined,callback,'script');
		}});jQuery.each(['get','post'],function(_i,method){
			jQuery[method]=function(url,data,callback,type){
				if(isFunction(data)){
					type=type||callback;callback=data;data=undefined;
				}return jQuery.ajax(jQuery.extend({url:url,type:method,dataType:type,data:data,success:callback},jQuery.isPlainObject(url)&&url));
			};
		});jQuery.ajaxPrefilter(function(s){
			var i;for(i in s.headers){
				if(i.toLowerCase()==='content-type'){
					s.contentType=s.headers[i]||'';
				}
			}
		});jQuery._evalUrl=function(url,options,doc){
			return jQuery.ajax({url:url,type:'GET',dataType:'script',cache:true,async:false,global:false,converters:{'text script':function(){}},dataFilter:function(response){
				jQuery.globalEval(response,options,doc);
			}});
		};jQuery.fn.extend({wrapAll:function(html){
			var wrap;if(this[0]){
				if(isFunction(html)){
					html=html.call(this[0]);
				}wrap=jQuery(html,this[0].ownerDocument).eq(0).clone(true);if(this[0].parentNode){
					wrap.insertBefore(this[0]);
				}wrap.map(function(){
					var elem=this;while(elem.firstElementChild){
						elem=elem.firstElementChild;
					}return elem;
				}).append(this);
			}return this;
		},wrapInner:function(html){
			if(isFunction(html)){
				return this.each(function(i){
					jQuery(this).wrapInner(html.call(this,i));
				});
			}return this.each(function(){
				var self=jQuery(this),contents=self.contents();if(contents.length){
					contents.wrapAll(html);
				}else{
					self.append(html);
				}
			});
		},wrap:function(html){
			var htmlIsFunction=isFunction(html);return this.each(function(i){
				jQuery(this).wrapAll(htmlIsFunction?html.call(this,i):html);
			});
		},unwrap:function(selector){
			this.parent(selector).not('body').each(function(){
				jQuery(this).replaceWith(this.childNodes);
			});return this;
		}});jQuery.expr.pseudos.hidden=function(elem){
			return!jQuery.expr.pseudos.visible(elem);
		};jQuery.expr.pseudos.visible=function(elem){
			return!!(elem.offsetWidth||elem.offsetHeight||elem.getClientRects().length);
		};jQuery.ajaxSettings.xhr=function(){
			try{
				return new window.XMLHttpRequest;
			}catch(e){}
		};var xhrSuccessStatus={0:200,1223:204},xhrSupported=jQuery.ajaxSettings.xhr();support.cors=!!xhrSupported&&'withCredentials'in xhrSupported;support.ajax=xhrSupported=!!xhrSupported;jQuery.ajaxTransport(function(options){
			var callback,errorCallback;if(support.cors||xhrSupported&&!options.crossDomain){
				return{send:function(headers,complete){
					var i,xhr=options.xhr();xhr.open(options.type,options.url,options.async,options.username,options.password);if(options.xhrFields){
						for(i in options.xhrFields){
							xhr[i]=options.xhrFields[i];
						}
					}if(options.mimeType&&xhr.overrideMimeType){
						xhr.overrideMimeType(options.mimeType);
					}if(!options.crossDomain&&!headers['X-Requested-With']){
						headers['X-Requested-With']='XMLHttpRequest';
					}for(i in headers){
						xhr.setRequestHeader(i,headers[i]);
					}callback=function(type){
						return function(){
							if(callback){
								callback=errorCallback=xhr.onload=xhr.onerror=xhr.onabort=xhr.ontimeout=xhr.onreadystatechange=null;if(type==='abort'){
									xhr.abort();
								}else if(type==='error'){
									if(typeof xhr.status!=='number'){
										complete(0,'error');
									}else{
										complete(xhr.status,xhr.statusText);
									}
								}else{
									complete(xhrSuccessStatus[xhr.status]||xhr.status,xhr.statusText,(xhr.responseType||'text')!=='text'||typeof xhr.responseText!=='string'?{binary:xhr.response}:{text:xhr.responseText},xhr.getAllResponseHeaders());
								}
							}
						};
					};xhr.onload=callback();errorCallback=xhr.onerror=xhr.ontimeout=callback('error');if(xhr.onabort!==undefined){
						xhr.onabort=errorCallback;
					}else{
						xhr.onreadystatechange=function(){
							if(xhr.readyState===4){
								window.setTimeout(function(){
									if(callback){
										errorCallback();
									}
								});
							}
						};
					}callback=callback('abort');try{
						xhr.send(options.hasContent&&options.data||null);
					}catch(e){
						if(callback){
							throw e;
						}
					}
				},abort:function(){
					if(callback){
						callback();
					}
				}};
			}
		});jQuery.ajaxPrefilter(function(s){
			if(s.crossDomain){
				s.contents.script=false;
			}
		});jQuery.ajaxSetup({accepts:{script:'text/javascript, application/javascript, '+'application/ecmascript, application/x-ecmascript'},contents:{script:/\b(?:java|ecma)script\b/},converters:{'text script':function(text){
			jQuery.globalEval(text);return text;
		}}});jQuery.ajaxPrefilter('script',function(s){
			if(s.cache===undefined){
				s.cache=false;
			}if(s.crossDomain){
				s.type='GET';
			}
		});jQuery.ajaxTransport('script',function(s){
			if(s.crossDomain||s.scriptAttrs){
				var script,callback;return{send:function(_,complete){
					script=jQuery('<script>').attr(s.scriptAttrs||{}).prop({charset:s.scriptCharset,src:s.url}).on('load error',callback=function(evt){
						script.remove();callback=null;if(evt){
							complete(evt.type==='error'?404:200,evt.type);
						}
					});document.head.appendChild(script[0]);
				},abort:function(){
					if(callback){
						callback();
					}
				}};
			}
		});var oldCallbacks=[],rjsonp=/(=)\?(?=&|$)|\?\?/;jQuery.ajaxSetup({jsonp:'callback',jsonpCallback:function(){
			var callback=oldCallbacks.pop()||jQuery.expando+'_'+nonce.guid++;this[callback]=true;return callback;
		}});jQuery.ajaxPrefilter('json jsonp',function(s,originalSettings,jqXHR){
			var callbackName,overwritten,responseContainer,jsonProp=s.jsonp!==false&&(rjsonp.test(s.url)?'url':typeof s.data==='string'&&(s.contentType||'').indexOf('application/x-www-form-urlencoded')===0&&rjsonp.test(s.data)&&'data');if(jsonProp||s.dataTypes[0]==='jsonp'){
				callbackName=s.jsonpCallback=isFunction(s.jsonpCallback)?s.jsonpCallback():s.jsonpCallback;if(jsonProp){
					s[jsonProp]=s[jsonProp].replace(rjsonp,'$1'+callbackName);
				}else if(s.jsonp!==false){
					s.url+=(rquery.test(s.url)?'&':'?')+s.jsonp+'='+callbackName;
				}s.converters['script json']=function(){
					if(!responseContainer){
						jQuery.error(callbackName+' was not called');
					}return responseContainer[0];
				};s.dataTypes[0]='json';overwritten=window[callbackName];window[callbackName]=function(){
					responseContainer=arguments;
				};jqXHR.always(function(){
					if(overwritten===undefined){
						jQuery(window).removeProp(callbackName);
					}else{
						window[callbackName]=overwritten;
					}if(s[callbackName]){
						s.jsonpCallback=originalSettings.jsonpCallback;oldCallbacks.push(callbackName);
					}if(responseContainer&&isFunction(overwritten)){
						overwritten(responseContainer[0]);
					}responseContainer=overwritten=undefined;
				});return'script';
			}
		});support.createHTMLDocument=function(){
			var body=document.implementation.createHTMLDocument('').body;body.innerHTML='<form></form><form></form>';return body.childNodes.length===2;
		}();jQuery.parseHTML=function(data,context,keepScripts){
			if(typeof data!=='string'){
				return[];
			}if(typeof context==='boolean'){
				keepScripts=context;context=false;
			}var base,parsed,scripts;if(!context){
				if(support.createHTMLDocument){
					context=document.implementation.createHTMLDocument('');base=context.createElement('base');base.href=document.location.href;context.head.appendChild(base);
				}else{
					context=document;
				}
			}parsed=rsingleTag.exec(data);scripts=!keepScripts&&[];if(parsed){
				return[context.createElement(parsed[1])];
			}parsed=buildFragment([data],context,scripts);if(scripts&&scripts.length){
				jQuery(scripts).remove();
			}return jQuery.merge([],parsed.childNodes);
		};jQuery.fn.load=function(url,params,callback){
			var selector,type,response,self=this,off=url.indexOf(' ');if(off>-1){
				selector=stripAndCollapse(url.slice(off));url=url.slice(0,off);
			}if(isFunction(params)){
				callback=params;params=undefined;
			}else if(params&&typeof params==='object'){
				type='POST';
			}if(self.length>0){
				jQuery.ajax({url:url,type:type||'GET',dataType:'html',data:params}).done(function(responseText){
					response=arguments;self.html(selector?jQuery('<div>').append(jQuery.parseHTML(responseText)).find(selector):responseText);
				}).always(callback&&function(jqXHR,status){
					self.each(function(){
						callback.apply(this,response||[jqXHR.responseText,status,jqXHR]);
					});
				});
			}return this;
		};jQuery.expr.pseudos.animated=function(elem){
			return jQuery.grep(jQuery.timers,function(fn){
				return elem===fn.elem;
			}).length;
		};jQuery.offset={setOffset:function(elem,options,i){
			var curPosition,curLeft,curCSSTop,curTop,curOffset,curCSSLeft,calculatePosition,position=jQuery.css(elem,'position'),curElem=jQuery(elem),props={};if(position==='static'){
				elem.style.position='relative';
			}curOffset=curElem.offset();curCSSTop=jQuery.css(elem,'top');curCSSLeft=jQuery.css(elem,'left');calculatePosition=(position==='absolute'||position==='fixed')&&(curCSSTop+curCSSLeft).indexOf('auto')>-1;if(calculatePosition){
				curPosition=curElem.position();curTop=curPosition.top;curLeft=curPosition.left;
			}else{
				curTop=parseFloat(curCSSTop)||0;curLeft=parseFloat(curCSSLeft)||0;
			}if(isFunction(options)){
				options=options.call(elem,i,jQuery.extend({},curOffset));
			}if(options.top!=null){
				props.top=options.top-curOffset.top+curTop;
			}if(options.left!=null){
				props.left=options.left-curOffset.left+curLeft;
			}if('using'in options){
				options.using.call(elem,props);
			}else{
				curElem.css(props);
			}
		}};jQuery.fn.extend({offset:function(options){
			if(arguments.length){
				return options===undefined?this:this.each(function(i){
					jQuery.offset.setOffset(this,options,i);
				});
			}var rect,win,elem=this[0];if(!elem){
				return;
			}if(!elem.getClientRects().length){
				return{top:0,left:0};
			}rect=elem.getBoundingClientRect();win=elem.ownerDocument.defaultView;return{top:rect.top+win.pageYOffset,left:rect.left+win.pageXOffset};
		},position:function(){
			if(!this[0]){
				return;
			}var offsetParent,offset,doc,elem=this[0],parentOffset={top:0,left:0};if(jQuery.css(elem,'position')==='fixed'){
				offset=elem.getBoundingClientRect();
			}else{
				offset=this.offset();doc=elem.ownerDocument;offsetParent=elem.offsetParent||doc.documentElement;while(offsetParent&&(offsetParent===doc.body||offsetParent===doc.documentElement)&&jQuery.css(offsetParent,'position')==='static'){
					offsetParent=offsetParent.parentNode;
				}if(offsetParent&&offsetParent!==elem&&offsetParent.nodeType===1){
					parentOffset=jQuery(offsetParent).offset();parentOffset.top+=jQuery.css(offsetParent,'borderTopWidth',true);parentOffset.left+=jQuery.css(offsetParent,'borderLeftWidth',true);
				}
			}return{top:offset.top-parentOffset.top-jQuery.css(elem,'marginTop',true),left:offset.left-parentOffset.left-jQuery.css(elem,'marginLeft',true)};
		},offsetParent:function(){
			return this.map(function(){
				var offsetParent=this.offsetParent;while(offsetParent&&jQuery.css(offsetParent,'position')==='static'){
					offsetParent=offsetParent.offsetParent;
				}return offsetParent||documentElement;
			});
		}});jQuery.each({scrollLeft:'pageXOffset',scrollTop:'pageYOffset'},function(method,prop){
			var top='pageYOffset'===prop;jQuery.fn[method]=function(val){
				return access(this,function(elem,method,val){
					var win;if(isWindow(elem)){
						win=elem;
					}else if(elem.nodeType===9){
						win=elem.defaultView;
					}if(val===undefined){
						return win?win[prop]:elem[method];
					}if(win){
						win.scrollTo(!top?val:win.pageXOffset,top?val:win.pageYOffset);
					}else{
						elem[method]=val;
					}
				},method,val,arguments.length);
			};
		});jQuery.each(['top','left'],function(_i,prop){
			jQuery.cssHooks[prop]=addGetHookIf(support.pixelPosition,function(elem,computed){
				if(computed){
					computed=curCSS(elem,prop);return rnumnonpx.test(computed)?jQuery(elem).position()[prop]+'px':computed;
				}
			});
		});jQuery.each({Height:'height',Width:'width'},function(name,type){
			jQuery.each({padding:'inner'+name,content:type,'':'outer'+name},function(defaultExtra,funcName){
				jQuery.fn[funcName]=function(margin,value){
					var chainable=arguments.length&&(defaultExtra||typeof margin!=='boolean'),extra=defaultExtra||(margin===true||value===true?'margin':'border');return access(this,function(elem,type,value){
						var doc;if(isWindow(elem)){
							return funcName.indexOf('outer')===0?elem['inner'+name]:elem.document.documentElement['client'+name];
						}if(elem.nodeType===9){
							doc=elem.documentElement;return Math.max(elem.body['scroll'+name],doc['scroll'+name],elem.body['offset'+name],doc['offset'+name],doc['client'+name]);
						}return value===undefined?jQuery.css(elem,type,extra):jQuery.style(elem,type,value,extra);
					},type,chainable?margin:undefined,chainable);
				};
			});
		});jQuery.each(['ajaxStart','ajaxStop','ajaxComplete','ajaxError','ajaxSuccess','ajaxSend'],function(_i,type){
			jQuery.fn[type]=function(fn){
				return this.on(type,fn);
			};
		});jQuery.fn.extend({bind:function(types,data,fn){
			return this.on(types,null,data,fn);
		},unbind:function(types,fn){
			return this.off(types,null,fn);
		},delegate:function(selector,types,data,fn){
			return this.on(types,selector,data,fn);
		},undelegate:function(selector,types,fn){
			return arguments.length===1?this.off(selector,'**'):this.off(types,selector||'**',fn);
		},hover:function(fnOver,fnOut){
			return this.mouseenter(fnOver).mouseleave(fnOut||fnOver);
		}});jQuery.each(('blur focus focusin focusout resize scroll click dblclick '+'mousedown mouseup mousemove mouseover mouseout mouseenter mouseleave '+'change select submit keydown keypress keyup contextmenu').split(' '),function(_i,name){
			jQuery.fn[name]=function(data,fn){
				return arguments.length>0?this.on(name,null,data,fn):this.trigger(name);
			};
		});var rtrim=/^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;jQuery.proxy=function(fn,context){
			var tmp,args,proxy;if(typeof context==='string'){
				tmp=fn[context];context=fn;fn=tmp;
			}if(!isFunction(fn)){
				return undefined;
			}args=slice.call(arguments,2);proxy=function(){
				return fn.apply(context||this,args.concat(slice.call(arguments)));
			};proxy.guid=fn.guid=fn.guid||jQuery.guid++;return proxy;
		};jQuery.holdReady=function(hold){
			if(hold){
				jQuery.readyWait++;
			}else{
				jQuery.ready(true);
			}
		};jQuery.isArray=Array.isArray;jQuery.parseJSON=JSON.parse;jQuery.nodeName=nodeName;jQuery.isFunction=isFunction;jQuery.isWindow=isWindow;jQuery.camelCase=camelCase;jQuery.type=toType;jQuery.now=Date.now;jQuery.isNumeric=function(obj){
			var type=jQuery.type(obj);return(type==='number'||type==='string')&&!isNaN(obj-parseFloat(obj));
		};jQuery.trim=function(text){
			return text==null?'':(text+'').replace(rtrim,'');
		};if(typeof define==='function'&&define.amd){
			define('jquery',[],function(){
				return jQuery;
			});
		}var _jQuery=window.jQuery,_$=window.$;jQuery.noConflict=function(deep){
			if(window.$===jQuery){
				window.$=_$;
			}if(deep&&window.jQuery===jQuery){
				window.jQuery=_jQuery;
			}return jQuery;
		};if(typeof noGlobal==='undefined'){
			window.jQuery=window.$=jQuery;
		}return jQuery;
	});
},{}],2:[function(require,module,exports){
	'use strict';Object.defineProperty(exports,'__esModule',{value:true});function _defineProperties(target,props){
		for(var i=0;i<props.length;i++){
			var descriptor=props[i];descriptor.enumerable=descriptor.enumerable||false;descriptor.configurable=true;if('value'in descriptor)descriptor.writable=true;Object.defineProperty(target,descriptor.key,descriptor);
		}
	}function _createClass(Constructor,protoProps,staticProps){
		if(protoProps)_defineProperties(Constructor.prototype,protoProps);if(staticProps)_defineProperties(Constructor,staticProps);return Constructor;
	}function _extends(){
		_extends=Object.assign||function(target){
			for(var i=1;i<arguments.length;i++){
				var source=arguments[i];for(var key in source){
					if(Object.prototype.hasOwnProperty.call(source,key)){
						target[key]=source[key];
					}
				}
			}return target;
		};return _extends.apply(this,arguments);
	}function _inheritsLoose(subClass,superClass){
		subClass.prototype=Object.create(superClass.prototype);subClass.prototype.constructor=subClass;_setPrototypeOf(subClass,superClass);
	}function _getPrototypeOf(o){
		_getPrototypeOf=Object.setPrototypeOf?Object.getPrototypeOf:function _getPrototypeOf(o){
			return o.__proto__||Object.getPrototypeOf(o);
		};return _getPrototypeOf(o);
	}function _setPrototypeOf(o,p){
		_setPrototypeOf=Object.setPrototypeOf||function _setPrototypeOf(o,p){
			o.__proto__=p;return o;
		};return _setPrototypeOf(o,p);
	}function _isNativeReflectConstruct(){
		if(typeof Reflect==='undefined'||!Reflect.construct)return false;if(Reflect.construct.sham)return false;if(typeof Proxy==='function')return true;try{
			Boolean.prototype.valueOf.call(Reflect.construct(Boolean,[],function(){}));return true;
		}catch(e){
			return false;
		}
	}function _construct(Parent,args,Class){
		if(_isNativeReflectConstruct()){
			_construct=Reflect.construct;
		}else{
			_construct=function _construct(Parent,args,Class){
				var a=[null];a.push.apply(a,args);var Constructor=Function.bind.apply(Parent,a);var instance=new Constructor;if(Class)_setPrototypeOf(instance,Class.prototype);return instance;
			};
		}return _construct.apply(null,arguments);
	}function _isNativeFunction(fn){
		return Function.toString.call(fn).indexOf('[native code]')!==-1;
	}function _wrapNativeSuper(Class){
		var _cache=typeof Map==='function'?new Map:undefined;_wrapNativeSuper=function _wrapNativeSuper(Class){
			if(Class===null||!_isNativeFunction(Class))return Class;if(typeof Class!=='function'){
				throw new TypeError('Super expression must either be null or a function');
			}if(typeof _cache!=='undefined'){
				if(_cache.has(Class))return _cache.get(Class);_cache.set(Class,Wrapper);
			}function Wrapper(){
				return _construct(Class,arguments,_getPrototypeOf(this).constructor);
			}Wrapper.prototype=Object.create(Class.prototype,{constructor:{value:Wrapper,enumerable:false,writable:true,configurable:true}});return _setPrototypeOf(Wrapper,Class);
		};return _wrapNativeSuper(Class);
	}function _objectWithoutPropertiesLoose(source,excluded){
		if(source==null)return{};var target={};var sourceKeys=Object.keys(source);var key,i;for(i=0;i<sourceKeys.length;i++){
			key=sourceKeys[i];if(excluded.indexOf(key)>=0)continue;target[key]=source[key];
		}return target;
	}function _unsupportedIterableToArray(o,minLen){
		if(!o)return;if(typeof o==='string')return _arrayLikeToArray(o,minLen);var n=Object.prototype.toString.call(o).slice(8,-1);if(n==='Object'&&o.constructor)n=o.constructor.name;if(n==='Map'||n==='Set')return Array.from(o);if(n==='Arguments'||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _arrayLikeToArray(o,minLen);
	}function _arrayLikeToArray(arr,len){
		if(len==null||len>arr.length)len=arr.length;for(var i=0,arr2=new Array(len);i<len;i++)arr2[i]=arr[i];return arr2;
	}function _createForOfIteratorHelperLoose(o,allowArrayLike){
		var it=typeof Symbol!=='undefined'&&o[Symbol.iterator]||o['@@iterator'];if(it)return(it=it.call(o)).next.bind(it);if(Array.isArray(o)||(it=_unsupportedIterableToArray(o))||allowArrayLike&&o&&typeof o.length==='number'){
			if(it)o=it;var i=0;return function(){
				if(i>=o.length)return{done:true};return{done:false,value:o[i++]};
			};
		}throw new TypeError('Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.');
	}var LuxonError=function(_Error){
		_inheritsLoose(LuxonError,_Error);function LuxonError(){
			return _Error.apply(this,arguments)||this;
		}return LuxonError;
	}(_wrapNativeSuper(Error));var InvalidDateTimeError=function(_LuxonError){
		_inheritsLoose(InvalidDateTimeError,_LuxonError);function InvalidDateTimeError(reason){
			return _LuxonError.call(this,'Invalid DateTime: '+reason.toMessage())||this;
		}return InvalidDateTimeError;
	}(LuxonError);var InvalidIntervalError=function(_LuxonError2){
		_inheritsLoose(InvalidIntervalError,_LuxonError2);function InvalidIntervalError(reason){
			return _LuxonError2.call(this,'Invalid Interval: '+reason.toMessage())||this;
		}return InvalidIntervalError;
	}(LuxonError);var InvalidDurationError=function(_LuxonError3){
		_inheritsLoose(InvalidDurationError,_LuxonError3);function InvalidDurationError(reason){
			return _LuxonError3.call(this,'Invalid Duration: '+reason.toMessage())||this;
		}return InvalidDurationError;
	}(LuxonError);var ConflictingSpecificationError=function(_LuxonError4){
		_inheritsLoose(ConflictingSpecificationError,_LuxonError4);function ConflictingSpecificationError(){
			return _LuxonError4.apply(this,arguments)||this;
		}return ConflictingSpecificationError;
	}(LuxonError);var InvalidUnitError=function(_LuxonError5){
		_inheritsLoose(InvalidUnitError,_LuxonError5);function InvalidUnitError(unit){
			return _LuxonError5.call(this,'Invalid unit '+unit)||this;
		}return InvalidUnitError;
	}(LuxonError);var InvalidArgumentError=function(_LuxonError6){
		_inheritsLoose(InvalidArgumentError,_LuxonError6);function InvalidArgumentError(){
			return _LuxonError6.apply(this,arguments)||this;
		}return InvalidArgumentError;
	}(LuxonError);var ZoneIsAbstractError=function(_LuxonError7){
		_inheritsLoose(ZoneIsAbstractError,_LuxonError7);function ZoneIsAbstractError(){
			return _LuxonError7.call(this,'Zone is an abstract class')||this;
		}return ZoneIsAbstractError;
	}(LuxonError);var n='numeric',s='short',l='long';var DATE_SHORT={year:n,month:n,day:n};var DATE_MED={year:n,month:s,day:n};var DATE_MED_WITH_WEEKDAY={year:n,month:s,day:n,weekday:s};var DATE_FULL={year:n,month:l,day:n};var DATE_HUGE={year:n,month:l,day:n,weekday:l};var TIME_SIMPLE={hour:n,minute:n};var TIME_WITH_SECONDS={hour:n,minute:n,second:n};var TIME_WITH_SHORT_OFFSET={hour:n,minute:n,second:n,timeZoneName:s};var TIME_WITH_LONG_OFFSET={hour:n,minute:n,second:n,timeZoneName:l};var TIME_24_SIMPLE={hour:n,minute:n,hourCycle:'h23'};var TIME_24_WITH_SECONDS={hour:n,minute:n,second:n,hourCycle:'h23'};var TIME_24_WITH_SHORT_OFFSET={hour:n,minute:n,second:n,hourCycle:'h23',timeZoneName:s};var TIME_24_WITH_LONG_OFFSET={hour:n,minute:n,second:n,hourCycle:'h23',timeZoneName:l};var DATETIME_SHORT={year:n,month:n,day:n,hour:n,minute:n};var DATETIME_SHORT_WITH_SECONDS={year:n,month:n,day:n,hour:n,minute:n,second:n};var DATETIME_MED={year:n,month:s,day:n,hour:n,minute:n};var DATETIME_MED_WITH_SECONDS={year:n,month:s,day:n,hour:n,minute:n,second:n};var DATETIME_MED_WITH_WEEKDAY={year:n,month:s,day:n,weekday:s,hour:n,minute:n};var DATETIME_FULL={year:n,month:l,day:n,hour:n,minute:n,timeZoneName:s};var DATETIME_FULL_WITH_SECONDS={year:n,month:l,day:n,hour:n,minute:n,second:n,timeZoneName:s};var DATETIME_HUGE={year:n,month:l,day:n,weekday:l,hour:n,minute:n,timeZoneName:l};var DATETIME_HUGE_WITH_SECONDS={year:n,month:l,day:n,weekday:l,hour:n,minute:n,second:n,timeZoneName:l};function isUndefined(o){
		return typeof o==='undefined';
	}function isNumber(o){
		return typeof o==='number';
	}function isInteger(o){
		return typeof o==='number'&&o%1===0;
	}function isString(o){
		return typeof o==='string';
	}function isDate(o){
		return Object.prototype.toString.call(o)==='[object Date]';
	}function hasRelative(){
		try{
			return typeof Intl!=='undefined'&&!!Intl.RelativeTimeFormat;
		}catch(e){
			return false;
		}
	}function maybeArray(thing){
		return Array.isArray(thing)?thing:[thing];
	}function bestBy(arr,by,compare){
		if(arr.length===0){
			return undefined;
		}return arr.reduce(function(best,next){
			var pair=[by(next),next];if(!best){
				return pair;
			}else if(compare(best[0],pair[0])===best[0]){
				return best;
			}else{
				return pair;
			}
		},null)[1];
	}function pick(obj,keys){
		return keys.reduce(function(a,k){
			a[k]=obj[k];return a;
		},{});
	}function hasOwnProperty(obj,prop){
		return Object.prototype.hasOwnProperty.call(obj,prop);
	}function integerBetween(thing,bottom,top){
		return isInteger(thing)&&thing>=bottom&&thing<=top;
	}function floorMod(x,n){
		return x-n*Math.floor(x/n);
	}function padStart(input,n){
		if(n===void 0){
			n=2;
		}var minus=input<0?'-':'';var target=minus?input*-1:input;var result;if(target.toString().length<n){
			result=('0'.repeat(n)+target).slice(-n);
		}else{
			result=target.toString();
		}return''+minus+result;
	}function parseInteger(string){
		if(isUndefined(string)||string===null||string===''){
			return undefined;
		}else{
			return parseInt(string,10);
		}
	}function parseFloating(string){
		if(isUndefined(string)||string===null||string===''){
			return undefined;
		}else{
			return parseFloat(string);
		}
	}function parseMillis(fraction){
		if(isUndefined(fraction)||fraction===null||fraction===''){
			return undefined;
		}else{
			var f=parseFloat('0.'+fraction)*1e3;return Math.floor(f);
		}
	}function roundTo(number,digits,towardZero){
		if(towardZero===void 0){
			towardZero=false;
		}var factor=Math.pow(10,digits),rounder=towardZero?Math.trunc:Math.round;return rounder(number*factor)/factor;
	}function isLeapYear(year){
		return year%4===0&&(year%100!==0||year%400===0);
	}function daysInYear(year){
		return isLeapYear(year)?366:365;
	}function daysInMonth(year,month){
		var modMonth=floorMod(month-1,12)+1,modYear=year+(month-modMonth)/12;if(modMonth===2){
			return isLeapYear(modYear)?29:28;
		}else{
			return[31,null,31,30,31,30,31,31,30,31,30,31][modMonth-1];
		}
	}function objToLocalTS(obj){
		var d=Date.UTC(obj.year,obj.month-1,obj.day,obj.hour,obj.minute,obj.second,obj.millisecond);if(obj.year<100&&obj.year>=0){
			d=new Date(d);d.setUTCFullYear(d.getUTCFullYear()-1900);
		}return+d;
	}function weeksInWeekYear(weekYear){
		var p1=(weekYear+Math.floor(weekYear/4)-Math.floor(weekYear/100)+Math.floor(weekYear/400))%7,last=weekYear-1,p2=(last+Math.floor(last/4)-Math.floor(last/100)+Math.floor(last/400))%7;return p1===4||p2===3?53:52;
	}function untruncateYear(year){
		if(year>99){
			return year;
		}else return year>60?1900+year:2e3+year;
	}function parseZoneInfo(ts,offsetFormat,locale,timeZone){
		if(timeZone===void 0){
			timeZone=null;
		}var date=new Date(ts),intlOpts={hourCycle:'h23',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit'};if(timeZone){
			intlOpts.timeZone=timeZone;
		}var modified=_extends({timeZoneName:offsetFormat},intlOpts);var parsed=new Intl.DateTimeFormat(locale,modified).formatToParts(date).find(function(m){
			return m.type.toLowerCase()==='timezonename';
		});return parsed?parsed.value:null;
	}function signedOffset(offHourStr,offMinuteStr){
		var offHour=parseInt(offHourStr,10);if(Number.isNaN(offHour)){
			offHour=0;
		}var offMin=parseInt(offMinuteStr,10)||0,offMinSigned=offHour<0||Object.is(offHour,-0)?-offMin:offMin;return offHour*60+offMinSigned;
	}function asNumber(value){
		var numericValue=Number(value);if(typeof value==='boolean'||value===''||Number.isNaN(numericValue))throw new InvalidArgumentError('Invalid unit value '+value);return numericValue;
	}function normalizeObject(obj,normalizer){
		var normalized={};for(var u in obj){
			if(hasOwnProperty(obj,u)){
				var v=obj[u];if(v===undefined||v===null)continue;normalized[normalizer(u)]=asNumber(v);
			}
		}return normalized;
	}function formatOffset(offset,format){
		var hours=Math.trunc(Math.abs(offset/60)),minutes=Math.trunc(Math.abs(offset%60)),sign=offset>=0?'+':'-';switch(format){
		case'short':return''+sign+padStart(hours,2)+':'+padStart(minutes,2);case'narrow':return''+sign+hours+(minutes>0?':'+minutes:'');case'techie':return''+sign+padStart(hours,2)+padStart(minutes,2);default:throw new RangeError('Value format '+format+' is out of range for property format');
		}
	}function timeObject(obj){
		return pick(obj,['hour','minute','second','millisecond']);
	}var ianaRegex=/[A-Za-z_+-]{1,256}(:?\/[A-Za-z0-9_+-]{1,256}(\/[A-Za-z0-9_+-]{1,256})?)?/;var monthsLong=['January','February','March','April','May','June','July','August','September','October','November','December'];var monthsShort=['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];var monthsNarrow=['J','F','M','A','M','J','J','A','S','O','N','D'];function months(length){
		switch(length){
		case'narrow':return[].concat(monthsNarrow);case'short':return[].concat(monthsShort);case'long':return[].concat(monthsLong);case'numeric':return['1','2','3','4','5','6','7','8','9','10','11','12'];case'2-digit':return['01','02','03','04','05','06','07','08','09','10','11','12'];default:return null;
		}
	}var weekdaysLong=['Monday','Tuesday','Wednesday','Thursday','Friday','Saturday','Sunday'];var weekdaysShort=['Mon','Tue','Wed','Thu','Fri','Sat','Sun'];var weekdaysNarrow=['M','T','W','T','F','S','S'];function weekdays(length){
		switch(length){
		case'narrow':return[].concat(weekdaysNarrow);case'short':return[].concat(weekdaysShort);case'long':return[].concat(weekdaysLong);case'numeric':return['1','2','3','4','5','6','7'];default:return null;
		}
	}var meridiems=['AM','PM'];var erasLong=['Before Christ','Anno Domini'];var erasShort=['BC','AD'];var erasNarrow=['B','A'];function eras(length){
		switch(length){
		case'narrow':return[].concat(erasNarrow);case'short':return[].concat(erasShort);case'long':return[].concat(erasLong);default:return null;
		}
	}function meridiemForDateTime(dt){
		return meridiems[dt.hour<12?0:1];
	}function weekdayForDateTime(dt,length){
		return weekdays(length)[dt.weekday-1];
	}function monthForDateTime(dt,length){
		return months(length)[dt.month-1];
	}function eraForDateTime(dt,length){
		return eras(length)[dt.year<0?0:1];
	}function formatRelativeTime(unit,count,numeric,narrow){
		if(numeric===void 0){
			numeric='always';
		}if(narrow===void 0){
			narrow=false;
		}var units={years:['year','yr.'],quarters:['quarter','qtr.'],months:['month','mo.'],weeks:['week','wk.'],days:['day','day','days'],hours:['hour','hr.'],minutes:['minute','min.'],seconds:['second','sec.']};var lastable=['hours','minutes','seconds'].indexOf(unit)===-1;if(numeric==='auto'&&lastable){
			var isDay=unit==='days';switch(count){
			case 1:return isDay?'tomorrow':'next '+units[unit][0];case-1:return isDay?'yesterday':'last '+units[unit][0];case 0:return isDay?'today':'this '+units[unit][0];
			}
		}var isInPast=Object.is(count,-0)||count<0,fmtValue=Math.abs(count),singular=fmtValue===1,lilUnits=units[unit],fmtUnit=narrow?singular?lilUnits[1]:lilUnits[2]||lilUnits[1]:singular?units[unit][0]:unit;return isInPast?fmtValue+' '+fmtUnit+' ago':'in '+fmtValue+' '+fmtUnit;
	}function stringifyTokens(splits,tokenToString){
		var s='';for(var _iterator=_createForOfIteratorHelperLoose(splits),_step;!(_step=_iterator()).done;){
			var token=_step.value;if(token.literal){
				s+=token.val;
			}else{
				s+=tokenToString(token.val);
			}
		}return s;
	}var _macroTokenToFormatOpts={D:DATE_SHORT,DD:DATE_MED,DDD:DATE_FULL,DDDD:DATE_HUGE,t:TIME_SIMPLE,tt:TIME_WITH_SECONDS,ttt:TIME_WITH_SHORT_OFFSET,tttt:TIME_WITH_LONG_OFFSET,T:TIME_24_SIMPLE,TT:TIME_24_WITH_SECONDS,TTT:TIME_24_WITH_SHORT_OFFSET,TTTT:TIME_24_WITH_LONG_OFFSET,f:DATETIME_SHORT,ff:DATETIME_MED,fff:DATETIME_FULL,ffff:DATETIME_HUGE,F:DATETIME_SHORT_WITH_SECONDS,FF:DATETIME_MED_WITH_SECONDS,FFF:DATETIME_FULL_WITH_SECONDS,FFFF:DATETIME_HUGE_WITH_SECONDS};var Formatter=function(){
		Formatter.create=function create(locale,opts){
			if(opts===void 0){
				opts={};
			}return new Formatter(locale,opts);
		};Formatter.parseFormat=function parseFormat(fmt){
			var current=null,currentFull='',bracketed=false;var splits=[];for(var i=0;i<fmt.length;i++){
				var c=fmt.charAt(i);if(c==='\''){
					if(currentFull.length>0){
						splits.push({literal:bracketed,val:currentFull});
					}current=null;currentFull='';bracketed=!bracketed;
				}else if(bracketed){
					currentFull+=c;
				}else if(c===current){
					currentFull+=c;
				}else{
					if(currentFull.length>0){
						splits.push({literal:false,val:currentFull});
					}currentFull=c;current=c;
				}
			}if(currentFull.length>0){
				splits.push({literal:bracketed,val:currentFull});
			}return splits;
		};Formatter.macroTokenToFormatOpts=function macroTokenToFormatOpts(token){
			return _macroTokenToFormatOpts[token];
		};function Formatter(locale,formatOpts){
			this.opts=formatOpts;this.loc=locale;this.systemLoc=null;
		}var _proto=Formatter.prototype;_proto.formatWithSystemDefault=function formatWithSystemDefault(dt,opts){
			if(this.systemLoc===null){
				this.systemLoc=this.loc.redefaultToSystem();
			}var df=this.systemLoc.dtFormatter(dt,_extends({},this.opts,opts));return df.format();
		};_proto.formatDateTime=function formatDateTime(dt,opts){
			if(opts===void 0){
				opts={};
			}var df=this.loc.dtFormatter(dt,_extends({},this.opts,opts));return df.format();
		};_proto.formatDateTimeParts=function formatDateTimeParts(dt,opts){
			if(opts===void 0){
				opts={};
			}var df=this.loc.dtFormatter(dt,_extends({},this.opts,opts));return df.formatToParts();
		};_proto.resolvedOptions=function resolvedOptions(dt,opts){
			if(opts===void 0){
				opts={};
			}var df=this.loc.dtFormatter(dt,_extends({},this.opts,opts));return df.resolvedOptions();
		};_proto.num=function num(n,p){
			if(p===void 0){
				p=0;
			}if(this.opts.forceSimple){
				return padStart(n,p);
			}var opts=_extends({},this.opts);if(p>0){
				opts.padTo=p;
			}return this.loc.numberFormatter(opts).format(n);
		};_proto.formatDateTimeFromString=function formatDateTimeFromString(dt,fmt){
			var _this=this;var knownEnglish=this.loc.listingMode()==='en',useDateTimeFormatter=this.loc.outputCalendar&&this.loc.outputCalendar!=='gregory',string=function string(opts,extract){
					return _this.loc.extract(dt,opts,extract);
				},formatOffset=function formatOffset(opts){
					if(dt.isOffsetFixed&&dt.offset===0&&opts.allowZ){
						return'Z';
					}return dt.isValid?dt.zone.formatOffset(dt.ts,opts.format):'';
				},meridiem=function meridiem(){
					return knownEnglish?meridiemForDateTime(dt):string({hour:'numeric',hourCycle:'h12'},'dayperiod');
				},month=function month(length,standalone){
					return knownEnglish?monthForDateTime(dt,length):string(standalone?{month:length}:{month:length,day:'numeric'},'month');
				},weekday=function weekday(length,standalone){
					return knownEnglish?weekdayForDateTime(dt,length):string(standalone?{weekday:length}:{weekday:length,month:'long',day:'numeric'},'weekday');
				},maybeMacro=function maybeMacro(token){
					var formatOpts=Formatter.macroTokenToFormatOpts(token);if(formatOpts){
						return _this.formatWithSystemDefault(dt,formatOpts);
					}else{
						return token;
					}
				},era=function era(length){
					return knownEnglish?eraForDateTime(dt,length):string({era:length},'era');
				},tokenToString=function tokenToString(token){
					switch(token){
					case'S':return _this.num(dt.millisecond);case'u':case'SSS':return _this.num(dt.millisecond,3);case's':return _this.num(dt.second);case'ss':return _this.num(dt.second,2);case'uu':return _this.num(Math.floor(dt.millisecond/10),2);case'uuu':return _this.num(Math.floor(dt.millisecond/100));case'm':return _this.num(dt.minute);case'mm':return _this.num(dt.minute,2);case'h':return _this.num(dt.hour%12===0?12:dt.hour%12);case'hh':return _this.num(dt.hour%12===0?12:dt.hour%12,2);case'H':return _this.num(dt.hour);case'HH':return _this.num(dt.hour,2);case'Z':return formatOffset({format:'narrow',allowZ:_this.opts.allowZ});case'ZZ':return formatOffset({format:'short',allowZ:_this.opts.allowZ});case'ZZZ':return formatOffset({format:'techie',allowZ:_this.opts.allowZ});case'ZZZZ':return dt.zone.offsetName(dt.ts,{format:'short',locale:_this.loc.locale});case'ZZZZZ':return dt.zone.offsetName(dt.ts,{format:'long',locale:_this.loc.locale});case'z':return dt.zoneName;case'a':return meridiem();case'd':return useDateTimeFormatter?string({day:'numeric'},'day'):_this.num(dt.day);case'dd':return useDateTimeFormatter?string({day:'2-digit'},'day'):_this.num(dt.day,2);case'c':return _this.num(dt.weekday);case'ccc':return weekday('short',true);case'cccc':return weekday('long',true);case'ccccc':return weekday('narrow',true);case'E':return _this.num(dt.weekday);case'EEE':return weekday('short',false);case'EEEE':return weekday('long',false);case'EEEEE':return weekday('narrow',false);case'L':return useDateTimeFormatter?string({month:'numeric',day:'numeric'},'month'):_this.num(dt.month);case'LL':return useDateTimeFormatter?string({month:'2-digit',day:'numeric'},'month'):_this.num(dt.month,2);case'LLL':return month('short',true);case'LLLL':return month('long',true);case'LLLLL':return month('narrow',true);case'M':return useDateTimeFormatter?string({month:'numeric'},'month'):_this.num(dt.month);case'MM':return useDateTimeFormatter?string({month:'2-digit'},'month'):_this.num(dt.month,2);case'MMM':return month('short',false);case'MMMM':return month('long',false);case'MMMMM':return month('narrow',false);case'y':return useDateTimeFormatter?string({year:'numeric'},'year'):_this.num(dt.year);case'yy':return useDateTimeFormatter?string({year:'2-digit'},'year'):_this.num(dt.year.toString().slice(-2),2);case'yyyy':return useDateTimeFormatter?string({year:'numeric'},'year'):_this.num(dt.year,4);case'yyyyyy':return useDateTimeFormatter?string({year:'numeric'},'year'):_this.num(dt.year,6);case'G':return era('short');case'GG':return era('long');case'GGGGG':return era('narrow');case'kk':return _this.num(dt.weekYear.toString().slice(-2),2);case'kkkk':return _this.num(dt.weekYear,4);case'W':return _this.num(dt.weekNumber);case'WW':return _this.num(dt.weekNumber,2);case'o':return _this.num(dt.ordinal);case'ooo':return _this.num(dt.ordinal,3);case'q':return _this.num(dt.quarter);case'qq':return _this.num(dt.quarter,2);case'X':return _this.num(Math.floor(dt.ts/1e3));case'x':return _this.num(dt.ts);default:return maybeMacro(token);
					}
				};return stringifyTokens(Formatter.parseFormat(fmt),tokenToString);
		};_proto.formatDurationFromString=function formatDurationFromString(dur,fmt){
			var _this2=this;var tokenToField=function tokenToField(token){
					switch(token[0]){
					case'S':return'millisecond';case's':return'second';case'm':return'minute';case'h':return'hour';case'd':return'day';case'M':return'month';case'y':return'year';default:return null;
					}
				},tokenToString=function tokenToString(lildur){
					return function(token){
						var mapped=tokenToField(token);if(mapped){
							return _this2.num(lildur.get(mapped),token.length);
						}else{
							return token;
						}
					};
				},tokens=Formatter.parseFormat(fmt),realTokens=tokens.reduce(function(found,_ref){
					var literal=_ref.literal,val=_ref.val;return literal?found:found.concat(val);
				},[]),collapsed=dur.shiftTo.apply(dur,realTokens.map(tokenToField).filter(function(t){
					return t;
				}));return stringifyTokens(tokens,tokenToString(collapsed));
		};return Formatter;
	}();var Invalid=function(){
		function Invalid(reason,explanation){
			this.reason=reason;this.explanation=explanation;
		}var _proto=Invalid.prototype;_proto.toMessage=function toMessage(){
			if(this.explanation){
				return this.reason+': '+this.explanation;
			}else{
				return this.reason;
			}
		};return Invalid;
	}();var Zone=function(){
		function Zone(){}var _proto=Zone.prototype;_proto.offsetName=function offsetName(ts,opts){
			throw new ZoneIsAbstractError;
		};_proto.formatOffset=function formatOffset(ts,format){
			throw new ZoneIsAbstractError;
		};_proto.offset=function offset(ts){
			throw new ZoneIsAbstractError;
		};_proto.equals=function equals(otherZone){
			throw new ZoneIsAbstractError;
		};_createClass(Zone,[{key:'type',get:function get(){
			throw new ZoneIsAbstractError;
		}},{key:'name',get:function get(){
			throw new ZoneIsAbstractError;
		}},{key:'isUniversal',get:function get(){
			throw new ZoneIsAbstractError;
		}},{key:'isValid',get:function get(){
			throw new ZoneIsAbstractError;
		}}]);return Zone;
	}();var singleton$1=null;var SystemZone=function(_Zone){
		_inheritsLoose(SystemZone,_Zone);function SystemZone(){
			return _Zone.apply(this,arguments)||this;
		}var _proto=SystemZone.prototype;_proto.offsetName=function offsetName(ts,_ref){
			var format=_ref.format,locale=_ref.locale;return parseZoneInfo(ts,format,locale);
		};_proto.formatOffset=function formatOffset$1(ts,format){
			return formatOffset(this.offset(ts),format);
		};_proto.offset=function offset(ts){
			return-new Date(ts).getTimezoneOffset();
		};_proto.equals=function equals(otherZone){
			return otherZone.type==='system';
		};_createClass(SystemZone,[{key:'type',get:function get(){
			return'system';
		}},{key:'name',get:function get(){
			return(new Intl.DateTimeFormat).resolvedOptions().timeZone;
		}},{key:'isUniversal',get:function get(){
			return false;
		}},{key:'isValid',get:function get(){
			return true;
		}}],[{key:'instance',get:function get(){
			if(singleton$1===null){
				singleton$1=new SystemZone;
			}return singleton$1;
		}}]);return SystemZone;
	}(Zone);var matchingRegex=RegExp('^'+ianaRegex.source+'$');var dtfCache={};function makeDTF(zone){
		if(!dtfCache[zone]){
			dtfCache[zone]=new Intl.DateTimeFormat('en-US',{hour12:false,timeZone:zone,year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',second:'2-digit'});
		}return dtfCache[zone];
	}var typeToPos={year:0,month:1,day:2,hour:3,minute:4,second:5};function hackyOffset(dtf,date){
		var formatted=dtf.format(date).replace(/\u200E/g,''),parsed=/(\d+)\/(\d+)\/(\d+),? (\d+):(\d+):(\d+)/.exec(formatted),fMonth=parsed[1],fDay=parsed[2],fYear=parsed[3],fHour=parsed[4],fMinute=parsed[5],fSecond=parsed[6];return[fYear,fMonth,fDay,fHour,fMinute,fSecond];
	}function partsOffset(dtf,date){
		var formatted=dtf.formatToParts(date),filled=[];for(var i=0;i<formatted.length;i++){
			var _formatted$i=formatted[i],type=_formatted$i.type,value=_formatted$i.value,pos=typeToPos[type];if(!isUndefined(pos)){
				filled[pos]=parseInt(value,10);
			}
		}return filled;
	}var ianaZoneCache={};var IANAZone=function(_Zone){
		_inheritsLoose(IANAZone,_Zone);IANAZone.create=function create(name){
			if(!ianaZoneCache[name]){
				ianaZoneCache[name]=new IANAZone(name);
			}return ianaZoneCache[name];
		};IANAZone.resetCache=function resetCache(){
			ianaZoneCache={};dtfCache={};
		};IANAZone.isValidSpecifier=function isValidSpecifier(s){
			return!!(s&&s.match(matchingRegex));
		};IANAZone.isValidZone=function isValidZone(zone){
			if(!zone){
				return false;
			}try{
				new Intl.DateTimeFormat('en-US',{timeZone:zone}).format();return true;
			}catch(e){
				return false;
			}
		};function IANAZone(name){
			var _this;_this=_Zone.call(this)||this;_this.zoneName=name;_this.valid=IANAZone.isValidZone(name);return _this;
		}var _proto=IANAZone.prototype;_proto.offsetName=function offsetName(ts,_ref){
			var format=_ref.format,locale=_ref.locale;return parseZoneInfo(ts,format,locale,this.name);
		};_proto.formatOffset=function formatOffset$1(ts,format){
			return formatOffset(this.offset(ts),format);
		};_proto.offset=function offset(ts){
			var date=new Date(ts);if(isNaN(date))return NaN;var dtf=makeDTF(this.name),_ref2=dtf.formatToParts?partsOffset(dtf,date):hackyOffset(dtf,date),year=_ref2[0],month=_ref2[1],day=_ref2[2],hour=_ref2[3],minute=_ref2[4],second=_ref2[5];var adjustedHour=hour===24?0:hour;var asUTC=objToLocalTS({year:year,month:month,day:day,hour:adjustedHour,minute:minute,second:second,millisecond:0});var asTS=+date;var over=asTS%1e3;asTS-=over>=0?over:1e3+over;return(asUTC-asTS)/(60*1e3);
		};_proto.equals=function equals(otherZone){
			return otherZone.type==='iana'&&otherZone.name===this.name;
		};_createClass(IANAZone,[{key:'type',get:function get(){
			return'iana';
		}},{key:'name',get:function get(){
			return this.zoneName;
		}},{key:'isUniversal',get:function get(){
			return false;
		}},{key:'isValid',get:function get(){
			return this.valid;
		}}]);return IANAZone;
	}(Zone);var singleton=null;var FixedOffsetZone=function(_Zone){
		_inheritsLoose(FixedOffsetZone,_Zone);FixedOffsetZone.instance=function instance(offset){
			return offset===0?FixedOffsetZone.utcInstance:new FixedOffsetZone(offset);
		};FixedOffsetZone.parseSpecifier=function parseSpecifier(s){
			if(s){
				var r=s.match(/^utc(?:([+-]\d{1,2})(?::(\d{2}))?)?$/i);if(r){
					return new FixedOffsetZone(signedOffset(r[1],r[2]));
				}
			}return null;
		};function FixedOffsetZone(offset){
			var _this;_this=_Zone.call(this)||this;_this.fixed=offset;return _this;
		}var _proto=FixedOffsetZone.prototype;_proto.offsetName=function offsetName(){
			return this.name;
		};_proto.formatOffset=function formatOffset$1(ts,format){
			return formatOffset(this.fixed,format);
		};_proto.offset=function offset(){
			return this.fixed;
		};_proto.equals=function equals(otherZone){
			return otherZone.type==='fixed'&&otherZone.fixed===this.fixed;
		};_createClass(FixedOffsetZone,[{key:'type',get:function get(){
			return'fixed';
		}},{key:'name',get:function get(){
			return this.fixed===0?'UTC':'UTC'+formatOffset(this.fixed,'narrow');
		}},{key:'isUniversal',get:function get(){
			return true;
		}},{key:'isValid',get:function get(){
			return true;
		}}],[{key:'utcInstance',get:function get(){
			if(singleton===null){
				singleton=new FixedOffsetZone(0);
			}return singleton;
		}}]);return FixedOffsetZone;
	}(Zone);var InvalidZone=function(_Zone){
		_inheritsLoose(InvalidZone,_Zone);function InvalidZone(zoneName){
			var _this;_this=_Zone.call(this)||this;_this.zoneName=zoneName;return _this;
		}var _proto=InvalidZone.prototype;_proto.offsetName=function offsetName(){
			return null;
		};_proto.formatOffset=function formatOffset(){
			return'';
		};_proto.offset=function offset(){
			return NaN;
		};_proto.equals=function equals(){
			return false;
		};_createClass(InvalidZone,[{key:'type',get:function get(){
			return'invalid';
		}},{key:'name',get:function get(){
			return this.zoneName;
		}},{key:'isUniversal',get:function get(){
			return false;
		}},{key:'isValid',get:function get(){
			return false;
		}}]);return InvalidZone;
	}(Zone);function normalizeZone(input,defaultZone){
		if(isUndefined(input)||input===null){
			return defaultZone;
		}else if(input instanceof Zone){
			return input;
		}else if(isString(input)){
			var lowered=input.toLowerCase();if(lowered==='local'||lowered==='system')return defaultZone;else if(lowered==='utc'||lowered==='gmt')return FixedOffsetZone.utcInstance;else if(IANAZone.isValidSpecifier(lowered))return IANAZone.create(input);else return FixedOffsetZone.parseSpecifier(lowered)||new InvalidZone(input);
		}else if(isNumber(input)){
			return FixedOffsetZone.instance(input);
		}else if(typeof input==='object'&&input.offset&&typeof input.offset==='number'){
			return input;
		}else{
			return new InvalidZone(input);
		}
	}var now=function now(){
			return Date.now();
		},defaultZone='system',defaultLocale=null,defaultNumberingSystem=null,defaultOutputCalendar=null,throwOnInvalid;var Settings=function(){
		function Settings(){}Settings.resetCaches=function resetCaches(){
			Locale.resetCache();IANAZone.resetCache();
		};_createClass(Settings,null,[{key:'now',get:function get(){
			return now;
		},set:function set(n){
			now=n;
		}},{key:'defaultZone',get:function get(){
			return normalizeZone(defaultZone,SystemZone.instance);
		},set:function set(zone){
			defaultZone=zone;
		}},{key:'defaultLocale',get:function get(){
			return defaultLocale;
		},set:function set(locale){
			defaultLocale=locale;
		}},{key:'defaultNumberingSystem',get:function get(){
			return defaultNumberingSystem;
		},set:function set(numberingSystem){
			defaultNumberingSystem=numberingSystem;
		}},{key:'defaultOutputCalendar',get:function get(){
			return defaultOutputCalendar;
		},set:function set(outputCalendar){
			defaultOutputCalendar=outputCalendar;
		}},{key:'throwOnInvalid',get:function get(){
			return throwOnInvalid;
		},set:function set(t){
			throwOnInvalid=t;
		}}]);return Settings;
	}();var _excluded=['base'];var intlDTCache={};function getCachedDTF(locString,opts){
		if(opts===void 0){
			opts={};
		}var key=JSON.stringify([locString,opts]);var dtf=intlDTCache[key];if(!dtf){
			dtf=new Intl.DateTimeFormat(locString,opts);intlDTCache[key]=dtf;
		}return dtf;
	}var intlNumCache={};function getCachedINF(locString,opts){
		if(opts===void 0){
			opts={};
		}var key=JSON.stringify([locString,opts]);var inf=intlNumCache[key];if(!inf){
			inf=new Intl.NumberFormat(locString,opts);intlNumCache[key]=inf;
		}return inf;
	}var intlRelCache={};function getCachedRTF(locString,opts){
		if(opts===void 0){
			opts={};
		}var _opts=opts;_opts.base;var cacheKeyOpts=_objectWithoutPropertiesLoose(_opts,_excluded);var key=JSON.stringify([locString,cacheKeyOpts]);var inf=intlRelCache[key];if(!inf){
			inf=new Intl.RelativeTimeFormat(locString,opts);intlRelCache[key]=inf;
		}return inf;
	}var sysLocaleCache=null;function systemLocale(){
		if(sysLocaleCache){
			return sysLocaleCache;
		}else{
			sysLocaleCache=(new Intl.DateTimeFormat).resolvedOptions().locale;return sysLocaleCache;
		}
	}function parseLocaleString(localeStr){
		var uIndex=localeStr.indexOf('-u-');if(uIndex===-1){
			return[localeStr];
		}else{
			var options;var smaller=localeStr.substring(0,uIndex);try{
				options=getCachedDTF(localeStr).resolvedOptions();
			}catch(e){
				options=getCachedDTF(smaller).resolvedOptions();
			}var _options=options,numberingSystem=_options.numberingSystem,calendar=_options.calendar;return[smaller,numberingSystem,calendar];
		}
	}function intlConfigString(localeStr,numberingSystem,outputCalendar){
		if(outputCalendar||numberingSystem){
			localeStr+='-u';if(outputCalendar){
				localeStr+='-ca-'+outputCalendar;
			}if(numberingSystem){
				localeStr+='-nu-'+numberingSystem;
			}return localeStr;
		}else{
			return localeStr;
		}
	}function mapMonths(f){
		var ms=[];for(var i=1;i<=12;i++){
			var dt=DateTime.utc(2016,i,1);ms.push(f(dt));
		}return ms;
	}function mapWeekdays(f){
		var ms=[];for(var i=1;i<=7;i++){
			var dt=DateTime.utc(2016,11,13+i);ms.push(f(dt));
		}return ms;
	}function listStuff(loc,length,defaultOK,englishFn,intlFn){
		var mode=loc.listingMode(defaultOK);if(mode==='error'){
			return null;
		}else if(mode==='en'){
			return englishFn(length);
		}else{
			return intlFn(length);
		}
	}function supportsFastNumbers(loc){
		if(loc.numberingSystem&&loc.numberingSystem!=='latn'){
			return false;
		}else{
			return loc.numberingSystem==='latn'||!loc.locale||loc.locale.startsWith('en')||new Intl.DateTimeFormat(loc.intl).resolvedOptions().numberingSystem==='latn';
		}
	}var PolyNumberFormatter=function(){
		function PolyNumberFormatter(intl,forceSimple,opts){
			this.padTo=opts.padTo||0;this.floor=opts.floor||false;if(!forceSimple){
				var intlOpts={useGrouping:false};if(opts.padTo>0)intlOpts.minimumIntegerDigits=opts.padTo;this.inf=getCachedINF(intl,intlOpts);
			}
		}var _proto=PolyNumberFormatter.prototype;_proto.format=function format(i){
			if(this.inf){
				var fixed=this.floor?Math.floor(i):i;return this.inf.format(fixed);
			}else{
				var _fixed=this.floor?Math.floor(i):roundTo(i,3);return padStart(_fixed,this.padTo);
			}
		};return PolyNumberFormatter;
	}();var PolyDateFormatter=function(){
		function PolyDateFormatter(dt,intl,opts){
			this.opts=opts;var z;if(dt.zone.isUniversal){
				var gmtOffset=-1*(dt.offset/60);var offsetZ=gmtOffset>=0?'Etc/GMT+'+gmtOffset:'Etc/GMT'+gmtOffset;if(dt.offset!==0&&IANAZone.create(offsetZ).valid){
					z=offsetZ;this.dt=dt;
				}else{
					z='UTC';if(opts.timeZoneName){
						this.dt=dt;
					}else{
						this.dt=dt.offset===0?dt:DateTime.fromMillis(dt.ts+dt.offset*60*1e3);
					}
				}
			}else if(dt.zone.type==='system'){
				this.dt=dt;
			}else{
				this.dt=dt;z=dt.zone.name;
			}var intlOpts=_extends({},this.opts);if(z){
				intlOpts.timeZone=z;
			}this.dtf=getCachedDTF(intl,intlOpts);
		}var _proto2=PolyDateFormatter.prototype;_proto2.format=function format(){
			return this.dtf.format(this.dt.toJSDate());
		};_proto2.formatToParts=function formatToParts(){
			return this.dtf.formatToParts(this.dt.toJSDate());
		};_proto2.resolvedOptions=function resolvedOptions(){
			return this.dtf.resolvedOptions();
		};return PolyDateFormatter;
	}();var PolyRelFormatter=function(){
		function PolyRelFormatter(intl,isEnglish,opts){
			this.opts=_extends({style:'long'},opts);if(!isEnglish&&hasRelative()){
				this.rtf=getCachedRTF(intl,opts);
			}
		}var _proto3=PolyRelFormatter.prototype;_proto3.format=function format(count,unit){
			if(this.rtf){
				return this.rtf.format(count,unit);
			}else{
				return formatRelativeTime(unit,count,this.opts.numeric,this.opts.style!=='long');
			}
		};_proto3.formatToParts=function formatToParts(count,unit){
			if(this.rtf){
				return this.rtf.formatToParts(count,unit);
			}else{
				return[];
			}
		};return PolyRelFormatter;
	}();var Locale=function(){
		Locale.fromOpts=function fromOpts(opts){
			return Locale.create(opts.locale,opts.numberingSystem,opts.outputCalendar,opts.defaultToEN);
		};Locale.create=function create(locale,numberingSystem,outputCalendar,defaultToEN){
			if(defaultToEN===void 0){
				defaultToEN=false;
			}var specifiedLocale=locale||Settings.defaultLocale;var localeR=specifiedLocale||(defaultToEN?'en-US':systemLocale());var numberingSystemR=numberingSystem||Settings.defaultNumberingSystem;var outputCalendarR=outputCalendar||Settings.defaultOutputCalendar;return new Locale(localeR,numberingSystemR,outputCalendarR,specifiedLocale);
		};Locale.resetCache=function resetCache(){
			sysLocaleCache=null;intlDTCache={};intlNumCache={};intlRelCache={};
		};Locale.fromObject=function fromObject(_temp){
			var _ref=_temp===void 0?{}:_temp,locale=_ref.locale,numberingSystem=_ref.numberingSystem,outputCalendar=_ref.outputCalendar;return Locale.create(locale,numberingSystem,outputCalendar);
		};function Locale(locale,numbering,outputCalendar,specifiedLocale){
			var _parseLocaleString=parseLocaleString(locale),parsedLocale=_parseLocaleString[0],parsedNumberingSystem=_parseLocaleString[1],parsedOutputCalendar=_parseLocaleString[2];this.locale=parsedLocale;this.numberingSystem=numbering||parsedNumberingSystem||null;this.outputCalendar=outputCalendar||parsedOutputCalendar||null;this.intl=intlConfigString(this.locale,this.numberingSystem,this.outputCalendar);this.weekdaysCache={format:{},standalone:{}};this.monthsCache={format:{},standalone:{}};this.meridiemCache=null;this.eraCache={};this.specifiedLocale=specifiedLocale;this.fastNumbersCached=null;
		}var _proto4=Locale.prototype;_proto4.listingMode=function listingMode(defaultOK){
			var isActuallyEn=this.isEnglish();var hasNoWeirdness=(this.numberingSystem===null||this.numberingSystem==='latn')&&(this.outputCalendar===null||this.outputCalendar==='gregory');return isActuallyEn&&hasNoWeirdness?'en':'intl';
		};_proto4.clone=function clone(alts){
			if(!alts||Object.getOwnPropertyNames(alts).length===0){
				return this;
			}else{
				return Locale.create(alts.locale||this.specifiedLocale,alts.numberingSystem||this.numberingSystem,alts.outputCalendar||this.outputCalendar,alts.defaultToEN||false);
			}
		};_proto4.redefaultToEN=function redefaultToEN(alts){
			if(alts===void 0){
				alts={};
			}return this.clone(_extends({},alts,{defaultToEN:true}));
		};_proto4.redefaultToSystem=function redefaultToSystem(alts){
			if(alts===void 0){
				alts={};
			}return this.clone(_extends({},alts,{defaultToEN:false}));
		};_proto4.months=function months$1(length,format,defaultOK){
			var _this=this;if(format===void 0){
				format=false;
			}if(defaultOK===void 0){
				defaultOK=true;
			}return listStuff(this,length,defaultOK,months,function(){
				var intl=format?{month:length,day:'numeric'}:{month:length},formatStr=format?'format':'standalone';if(!_this.monthsCache[formatStr][length]){
					_this.monthsCache[formatStr][length]=mapMonths(function(dt){
						return _this.extract(dt,intl,'month');
					});
				}return _this.monthsCache[formatStr][length];
			});
		};_proto4.weekdays=function weekdays$1(length,format,defaultOK){
			var _this2=this;if(format===void 0){
				format=false;
			}if(defaultOK===void 0){
				defaultOK=true;
			}return listStuff(this,length,defaultOK,weekdays,function(){
				var intl=format?{weekday:length,year:'numeric',month:'long',day:'numeric'}:{weekday:length},formatStr=format?'format':'standalone';if(!_this2.weekdaysCache[formatStr][length]){
					_this2.weekdaysCache[formatStr][length]=mapWeekdays(function(dt){
						return _this2.extract(dt,intl,'weekday');
					});
				}return _this2.weekdaysCache[formatStr][length];
			});
		};_proto4.meridiems=function meridiems$1(defaultOK){
			var _this3=this;if(defaultOK===void 0){
				defaultOK=true;
			}return listStuff(this,undefined,defaultOK,function(){
				return meridiems;
			},function(){
				if(!_this3.meridiemCache){
					var intl={hour:'numeric',hourCycle:'h12'};_this3.meridiemCache=[DateTime.utc(2016,11,13,9),DateTime.utc(2016,11,13,19)].map(function(dt){
						return _this3.extract(dt,intl,'dayperiod');
					});
				}return _this3.meridiemCache;
			});
		};_proto4.eras=function eras$1(length,defaultOK){
			var _this4=this;if(defaultOK===void 0){
				defaultOK=true;
			}return listStuff(this,length,defaultOK,eras,function(){
				var intl={era:length};if(!_this4.eraCache[length]){
					_this4.eraCache[length]=[DateTime.utc(-40,1,1),DateTime.utc(2017,1,1)].map(function(dt){
						return _this4.extract(dt,intl,'era');
					});
				}return _this4.eraCache[length];
			});
		};_proto4.extract=function extract(dt,intlOpts,field){
			var df=this.dtFormatter(dt,intlOpts),results=df.formatToParts(),matching=results.find(function(m){
				return m.type.toLowerCase()===field;
			});return matching?matching.value:null;
		};_proto4.numberFormatter=function numberFormatter(opts){
			if(opts===void 0){
				opts={};
			}return new PolyNumberFormatter(this.intl,opts.forceSimple||this.fastNumbers,opts);
		};_proto4.dtFormatter=function dtFormatter(dt,intlOpts){
			if(intlOpts===void 0){
				intlOpts={};
			}return new PolyDateFormatter(dt,this.intl,intlOpts);
		};_proto4.relFormatter=function relFormatter(opts){
			if(opts===void 0){
				opts={};
			}return new PolyRelFormatter(this.intl,this.isEnglish(),opts);
		};_proto4.isEnglish=function isEnglish(){
			return this.locale==='en'||this.locale.toLowerCase()==='en-us'||new Intl.DateTimeFormat(this.intl).resolvedOptions().locale.startsWith('en-us');
		};_proto4.equals=function equals(other){
			return this.locale===other.locale&&this.numberingSystem===other.numberingSystem&&this.outputCalendar===other.outputCalendar;
		};_createClass(Locale,[{key:'fastNumbers',get:function get(){
			if(this.fastNumbersCached==null){
				this.fastNumbersCached=supportsFastNumbers(this);
			}return this.fastNumbersCached;
		}}]);return Locale;
	}();function combineRegexes(){
		for(var _len=arguments.length,regexes=new Array(_len),_key=0;_key<_len;_key++){
			regexes[_key]=arguments[_key];
		}var full=regexes.reduce(function(f,r){
			return f+r.source;
		},'');return RegExp('^'+full+'$');
	}function combineExtractors(){
		for(var _len2=arguments.length,extractors=new Array(_len2),_key2=0;_key2<_len2;_key2++){
			extractors[_key2]=arguments[_key2];
		}return function(m){
			return extractors.reduce(function(_ref,ex){
				var mergedVals=_ref[0],mergedZone=_ref[1],cursor=_ref[2];var _ex=ex(m,cursor),val=_ex[0],zone=_ex[1],next=_ex[2];return[_extends({},mergedVals,val),mergedZone||zone,next];
			},[{},null,1]).slice(0,2);
		};
	}function parse(s){
		if(s==null){
			return[null,null];
		}for(var _len3=arguments.length,patterns=new Array(_len3>1?_len3-1:0),_key3=1;_key3<_len3;_key3++){
			patterns[_key3-1]=arguments[_key3];
		}for(var _i=0,_patterns=patterns;_i<_patterns.length;_i++){
			var _patterns$_i=_patterns[_i],regex=_patterns$_i[0],extractor=_patterns$_i[1];var m=regex.exec(s);if(m){
				return extractor(m);
			}
		}return[null,null];
	}function simpleParse(){
		for(var _len4=arguments.length,keys=new Array(_len4),_key4=0;_key4<_len4;_key4++){
			keys[_key4]=arguments[_key4];
		}return function(match,cursor){
			var ret={};var i;for(i=0;i<keys.length;i++){
				ret[keys[i]]=parseInteger(match[cursor+i]);
			}return[ret,null,cursor+i];
		};
	}var offsetRegex=/(?:(Z)|([+-]\d\d)(?::?(\d\d))?)/,isoTimeBaseRegex=/(\d\d)(?::?(\d\d)(?::?(\d\d)(?:[.,](\d{1,30}))?)?)?/,isoTimeRegex=RegExp(''+isoTimeBaseRegex.source+offsetRegex.source+'?'),isoTimeExtensionRegex=RegExp('(?:T'+isoTimeRegex.source+')?'),isoYmdRegex=/([+-]\d{6}|\d{4})(?:-?(\d\d)(?:-?(\d\d))?)?/,isoWeekRegex=/(\d{4})-?W(\d\d)(?:-?(\d))?/,isoOrdinalRegex=/(\d{4})-?(\d{3})/,extractISOWeekData=simpleParse('weekYear','weekNumber','weekDay'),extractISOOrdinalData=simpleParse('year','ordinal'),sqlYmdRegex=/(\d{4})-(\d\d)-(\d\d)/,sqlTimeRegex=RegExp(isoTimeBaseRegex.source+' ?(?:'+offsetRegex.source+'|('+ianaRegex.source+'))?'),sqlTimeExtensionRegex=RegExp('(?: '+sqlTimeRegex.source+')?');function int(match,pos,fallback){
		var m=match[pos];return isUndefined(m)?fallback:parseInteger(m);
	}function extractISOYmd(match,cursor){
		var item={year:int(match,cursor),month:int(match,cursor+1,1),day:int(match,cursor+2,1)};return[item,null,cursor+3];
	}function extractISOTime(match,cursor){
		var item={hours:int(match,cursor,0),minutes:int(match,cursor+1,0),seconds:int(match,cursor+2,0),milliseconds:parseMillis(match[cursor+3])};return[item,null,cursor+4];
	}function extractISOOffset(match,cursor){
		var local=!match[cursor]&&!match[cursor+1],fullOffset=signedOffset(match[cursor+1],match[cursor+2]),zone=local?null:FixedOffsetZone.instance(fullOffset);return[{},zone,cursor+3];
	}function extractIANAZone(match,cursor){
		var zone=match[cursor]?IANAZone.create(match[cursor]):null;return[{},zone,cursor+1];
	}var isoTimeOnly=RegExp('^T?'+isoTimeBaseRegex.source+'$');var isoDuration=/^-?P(?:(?:(-?\d{1,9}(?:\.\d{1,9})?)Y)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,9}(?:\.\d{1,9})?)W)?(?:(-?\d{1,9}(?:\.\d{1,9})?)D)?(?:T(?:(-?\d{1,9}(?:\.\d{1,9})?)H)?(?:(-?\d{1,9}(?:\.\d{1,9})?)M)?(?:(-?\d{1,20})(?:[.,](-?\d{1,9}))?S)?)?)$/;function extractISODuration(match){
		var s=match[0],yearStr=match[1],monthStr=match[2],weekStr=match[3],dayStr=match[4],hourStr=match[5],minuteStr=match[6],secondStr=match[7],millisecondsStr=match[8];var hasNegativePrefix=s[0]==='-';var negativeSeconds=secondStr&&secondStr[0]==='-';var maybeNegate=function maybeNegate(num,force){
			if(force===void 0){
				force=false;
			}return num!==undefined&&(force||num&&hasNegativePrefix)?-num:num;
		};return[{years:maybeNegate(parseFloating(yearStr)),months:maybeNegate(parseFloating(monthStr)),weeks:maybeNegate(parseFloating(weekStr)),days:maybeNegate(parseFloating(dayStr)),hours:maybeNegate(parseFloating(hourStr)),minutes:maybeNegate(parseFloating(minuteStr)),seconds:maybeNegate(parseFloating(secondStr),secondStr==='-0'),milliseconds:maybeNegate(parseMillis(millisecondsStr),negativeSeconds)}];
	}var obsOffsets={GMT:0,EDT:-4*60,EST:-5*60,CDT:-5*60,CST:-6*60,MDT:-6*60,MST:-7*60,PDT:-7*60,PST:-8*60};function fromStrings(weekdayStr,yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr){
		var result={year:yearStr.length===2?untruncateYear(parseInteger(yearStr)):parseInteger(yearStr),month:monthsShort.indexOf(monthStr)+1,day:parseInteger(dayStr),hour:parseInteger(hourStr),minute:parseInteger(minuteStr)};if(secondStr)result.second=parseInteger(secondStr);if(weekdayStr){
			result.weekday=weekdayStr.length>3?weekdaysLong.indexOf(weekdayStr)+1:weekdaysShort.indexOf(weekdayStr)+1;
		}return result;
	}var rfc2822=/^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|(?:([+-]\d\d)(\d\d)))$/;function extractRFC2822(match){
		var weekdayStr=match[1],dayStr=match[2],monthStr=match[3],yearStr=match[4],hourStr=match[5],minuteStr=match[6],secondStr=match[7],obsOffset=match[8],milOffset=match[9],offHourStr=match[10],offMinuteStr=match[11],result=fromStrings(weekdayStr,yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr);var offset;if(obsOffset){
			offset=obsOffsets[obsOffset];
		}else if(milOffset){
			offset=0;
		}else{
			offset=signedOffset(offHourStr,offMinuteStr);
		}return[result,new FixedOffsetZone(offset)];
	}function preprocessRFC2822(s){
		return s.replace(/\([^)]*\)|[\n\t]/g,' ').replace(/(\s\s+)/g,' ').trim();
	}var rfc1123=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun), (\d\d) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) (\d{4}) (\d\d):(\d\d):(\d\d) GMT$/,rfc850=/^(Monday|Tuesday|Wedsday|Thursday|Friday|Saturday|Sunday), (\d\d)-(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)-(\d\d) (\d\d):(\d\d):(\d\d) GMT$/,ascii=/^(Mon|Tue|Wed|Thu|Fri|Sat|Sun) (Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec) ( \d|\d\d) (\d\d):(\d\d):(\d\d) (\d{4})$/;function extractRFC1123Or850(match){
		var weekdayStr=match[1],dayStr=match[2],monthStr=match[3],yearStr=match[4],hourStr=match[5],minuteStr=match[6],secondStr=match[7],result=fromStrings(weekdayStr,yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr);return[result,FixedOffsetZone.utcInstance];
	}function extractASCII(match){
		var weekdayStr=match[1],monthStr=match[2],dayStr=match[3],hourStr=match[4],minuteStr=match[5],secondStr=match[6],yearStr=match[7],result=fromStrings(weekdayStr,yearStr,monthStr,dayStr,hourStr,minuteStr,secondStr);return[result,FixedOffsetZone.utcInstance];
	}var isoYmdWithTimeExtensionRegex=combineRegexes(isoYmdRegex,isoTimeExtensionRegex);var isoWeekWithTimeExtensionRegex=combineRegexes(isoWeekRegex,isoTimeExtensionRegex);var isoOrdinalWithTimeExtensionRegex=combineRegexes(isoOrdinalRegex,isoTimeExtensionRegex);var isoTimeCombinedRegex=combineRegexes(isoTimeRegex);var extractISOYmdTimeAndOffset=combineExtractors(extractISOYmd,extractISOTime,extractISOOffset);var extractISOWeekTimeAndOffset=combineExtractors(extractISOWeekData,extractISOTime,extractISOOffset);var extractISOOrdinalDateAndTime=combineExtractors(extractISOOrdinalData,extractISOTime,extractISOOffset);var extractISOTimeAndOffset=combineExtractors(extractISOTime,extractISOOffset);function parseISODate(s){
		return parse(s,[isoYmdWithTimeExtensionRegex,extractISOYmdTimeAndOffset],[isoWeekWithTimeExtensionRegex,extractISOWeekTimeAndOffset],[isoOrdinalWithTimeExtensionRegex,extractISOOrdinalDateAndTime],[isoTimeCombinedRegex,extractISOTimeAndOffset]);
	}function parseRFC2822Date(s){
		return parse(preprocessRFC2822(s),[rfc2822,extractRFC2822]);
	}function parseHTTPDate(s){
		return parse(s,[rfc1123,extractRFC1123Or850],[rfc850,extractRFC1123Or850],[ascii,extractASCII]);
	}function parseISODuration(s){
		return parse(s,[isoDuration,extractISODuration]);
	}var extractISOTimeOnly=combineExtractors(extractISOTime);function parseISOTimeOnly(s){
		return parse(s,[isoTimeOnly,extractISOTimeOnly]);
	}var sqlYmdWithTimeExtensionRegex=combineRegexes(sqlYmdRegex,sqlTimeExtensionRegex);var sqlTimeCombinedRegex=combineRegexes(sqlTimeRegex);var extractISOYmdTimeOffsetAndIANAZone=combineExtractors(extractISOYmd,extractISOTime,extractISOOffset,extractIANAZone);var extractISOTimeOffsetAndIANAZone=combineExtractors(extractISOTime,extractISOOffset,extractIANAZone);function parseSQL(s){
		return parse(s,[sqlYmdWithTimeExtensionRegex,extractISOYmdTimeOffsetAndIANAZone],[sqlTimeCombinedRegex,extractISOTimeOffsetAndIANAZone]);
	}var INVALID$2='Invalid Duration';var lowOrderMatrix={weeks:{days:7,hours:7*24,minutes:7*24*60,seconds:7*24*60*60,milliseconds:7*24*60*60*1e3},days:{hours:24,minutes:24*60,seconds:24*60*60,milliseconds:24*60*60*1e3},hours:{minutes:60,seconds:60*60,milliseconds:60*60*1e3},minutes:{seconds:60,milliseconds:60*1e3},seconds:{milliseconds:1e3}},casualMatrix=_extends({years:{quarters:4,months:12,weeks:52,days:365,hours:365*24,minutes:365*24*60,seconds:365*24*60*60,milliseconds:365*24*60*60*1e3},quarters:{months:3,weeks:13,days:91,hours:91*24,minutes:91*24*60,seconds:91*24*60*60,milliseconds:91*24*60*60*1e3},months:{weeks:4,days:30,hours:30*24,minutes:30*24*60,seconds:30*24*60*60,milliseconds:30*24*60*60*1e3}},lowOrderMatrix),daysInYearAccurate=146097/400,daysInMonthAccurate=146097/4800,accurateMatrix=_extends({years:{quarters:4,months:12,weeks:daysInYearAccurate/7,days:daysInYearAccurate,hours:daysInYearAccurate*24,minutes:daysInYearAccurate*24*60,seconds:daysInYearAccurate*24*60*60,milliseconds:daysInYearAccurate*24*60*60*1e3},quarters:{months:3,weeks:daysInYearAccurate/28,days:daysInYearAccurate/4,hours:daysInYearAccurate*24/4,minutes:daysInYearAccurate*24*60/4,seconds:daysInYearAccurate*24*60*60/4,milliseconds:daysInYearAccurate*24*60*60*1e3/4},months:{weeks:daysInMonthAccurate/7,days:daysInMonthAccurate,hours:daysInMonthAccurate*24,minutes:daysInMonthAccurate*24*60,seconds:daysInMonthAccurate*24*60*60,milliseconds:daysInMonthAccurate*24*60*60*1e3}},lowOrderMatrix);var orderedUnits$1=['years','quarters','months','weeks','days','hours','minutes','seconds','milliseconds'];var reverseUnits=orderedUnits$1.slice(0).reverse();function clone$1(dur,alts,clear){
		if(clear===void 0){
			clear=false;
		}var conf={values:clear?alts.values:_extends({},dur.values,alts.values||{}),loc:dur.loc.clone(alts.loc),conversionAccuracy:alts.conversionAccuracy||dur.conversionAccuracy};return new Duration(conf);
	}function antiTrunc(n){
		return n<0?Math.floor(n):Math.ceil(n);
	}function convert(matrix,fromMap,fromUnit,toMap,toUnit){
		var conv=matrix[toUnit][fromUnit],raw=fromMap[fromUnit]/conv,sameSign=Math.sign(raw)===Math.sign(toMap[toUnit]),added=!sameSign&&toMap[toUnit]!==0&&Math.abs(raw)<=1?antiTrunc(raw):Math.trunc(raw);toMap[toUnit]+=added;fromMap[fromUnit]-=added*conv;
	}function normalizeValues(matrix,vals){
		reverseUnits.reduce(function(previous,current){
			if(!isUndefined(vals[current])){
				if(previous){
					convert(matrix,vals,previous,vals,current);
				}return current;
			}else{
				return previous;
			}
		},null);
	}var Duration=function(){
		function Duration(config){
			var accurate=config.conversionAccuracy==='longterm'||false;this.values=config.values;this.loc=config.loc||Locale.create();this.conversionAccuracy=accurate?'longterm':'casual';this.invalid=config.invalid||null;this.matrix=accurate?accurateMatrix:casualMatrix;this.isLuxonDuration=true;
		}Duration.fromMillis=function fromMillis(count,opts){
			return Duration.fromObject({milliseconds:count},opts);
		};Duration.fromObject=function fromObject(obj,opts){
			if(opts===void 0){
				opts={};
			}if(obj==null||typeof obj!=='object'){
				throw new InvalidArgumentError('Duration.fromObject: argument expected to be an object, got '+(obj===null?'null':typeof obj));
			}return new Duration({values:normalizeObject(obj,Duration.normalizeUnit),loc:Locale.fromObject(opts),conversionAccuracy:opts.conversionAccuracy});
		};Duration.fromDurationLike=function fromDurationLike(durationLike){
			if(isNumber(durationLike)){
				return Duration.fromMillis(durationLike);
			}else if(Duration.isDuration(durationLike)){
				return durationLike;
			}else if(typeof durationLike==='object'){
				return Duration.fromObject(durationLike);
			}else{
				throw new InvalidArgumentError('Unknown duration argument '+durationLike+' of type '+typeof durationLike);
			}
		};Duration.fromISO=function fromISO(text,opts){
			var _parseISODuration=parseISODuration(text),parsed=_parseISODuration[0];if(parsed){
				return Duration.fromObject(parsed,opts);
			}else{
				return Duration.invalid('unparsable','the input "'+text+'" can\'t be parsed as ISO 8601');
			}
		};Duration.fromISOTime=function fromISOTime(text,opts){
			var _parseISOTimeOnly=parseISOTimeOnly(text),parsed=_parseISOTimeOnly[0];if(parsed){
				return Duration.fromObject(parsed,opts);
			}else{
				return Duration.invalid('unparsable','the input "'+text+'" can\'t be parsed as ISO 8601');
			}
		};Duration.invalid=function invalid(reason,explanation){
			if(explanation===void 0){
				explanation=null;
			}if(!reason){
				throw new InvalidArgumentError('need to specify a reason the Duration is invalid');
			}var invalid=reason instanceof Invalid?reason:new Invalid(reason,explanation);if(Settings.throwOnInvalid){
				throw new InvalidDurationError(invalid);
			}else{
				return new Duration({invalid:invalid});
			}
		};Duration.normalizeUnit=function normalizeUnit(unit){
			var normalized={year:'years',years:'years',quarter:'quarters',quarters:'quarters',month:'months',months:'months',week:'weeks',weeks:'weeks',day:'days',days:'days',hour:'hours',hours:'hours',minute:'minutes',minutes:'minutes',second:'seconds',seconds:'seconds',millisecond:'milliseconds',milliseconds:'milliseconds'}[unit?unit.toLowerCase():unit];if(!normalized)throw new InvalidUnitError(unit);return normalized;
		};Duration.isDuration=function isDuration(o){
			return o&&o.isLuxonDuration||false;
		};var _proto=Duration.prototype;_proto.toFormat=function toFormat(fmt,opts){
			if(opts===void 0){
				opts={};
			}var fmtOpts=_extends({},opts,{floor:opts.round!==false&&opts.floor!==false});return this.isValid?Formatter.create(this.loc,fmtOpts).formatDurationFromString(this,fmt):INVALID$2;
		};_proto.toObject=function toObject(){
			if(!this.isValid)return{};return _extends({},this.values);
		};_proto.toISO=function toISO(){
			if(!this.isValid)return null;var s='P';if(this.years!==0)s+=this.years+'Y';if(this.months!==0||this.quarters!==0)s+=this.months+this.quarters*3+'M';if(this.weeks!==0)s+=this.weeks+'W';if(this.days!==0)s+=this.days+'D';if(this.hours!==0||this.minutes!==0||this.seconds!==0||this.milliseconds!==0)s+='T';if(this.hours!==0)s+=this.hours+'H';if(this.minutes!==0)s+=this.minutes+'M';if(this.seconds!==0||this.milliseconds!==0)s+=roundTo(this.seconds+this.milliseconds/1e3,3)+'S';if(s==='P')s+='T0S';return s;
		};_proto.toISOTime=function toISOTime(opts){
			if(opts===void 0){
				opts={};
			}if(!this.isValid)return null;var millis=this.toMillis();if(millis<0||millis>=864e5)return null;opts=_extends({suppressMilliseconds:false,suppressSeconds:false,includePrefix:false,format:'extended'},opts);var value=this.shiftTo('hours','minutes','seconds','milliseconds');var fmt=opts.format==='basic'?'hhmm':'hh:mm';if(!opts.suppressSeconds||value.seconds!==0||value.milliseconds!==0){
				fmt+=opts.format==='basic'?'ss':':ss';if(!opts.suppressMilliseconds||value.milliseconds!==0){
					fmt+='.SSS';
				}
			}var str=value.toFormat(fmt);if(opts.includePrefix){
				str='T'+str;
			}return str;
		};_proto.toJSON=function toJSON(){
			return this.toISO();
		};_proto.toString=function toString(){
			return this.toISO();
		};_proto.toMillis=function toMillis(){
			return this.as('milliseconds');
		};_proto.valueOf=function valueOf(){
			return this.toMillis();
		};_proto.plus=function plus(duration){
			if(!this.isValid)return this;var dur=Duration.fromDurationLike(duration),result={};for(var _iterator=_createForOfIteratorHelperLoose(orderedUnits$1),_step;!(_step=_iterator()).done;){
				var k=_step.value;if(hasOwnProperty(dur.values,k)||hasOwnProperty(this.values,k)){
					result[k]=dur.get(k)+this.get(k);
				}
			}return clone$1(this,{values:result},true);
		};_proto.minus=function minus(duration){
			if(!this.isValid)return this;var dur=Duration.fromDurationLike(duration);return this.plus(dur.negate());
		};_proto.mapUnits=function mapUnits(fn){
			if(!this.isValid)return this;var result={};for(var _i=0,_Object$keys=Object.keys(this.values);_i<_Object$keys.length;_i++){
				var k=_Object$keys[_i];result[k]=asNumber(fn(this.values[k],k));
			}return clone$1(this,{values:result},true);
		};_proto.get=function get(unit){
			return this[Duration.normalizeUnit(unit)];
		};_proto.set=function set(values){
			if(!this.isValid)return this;var mixed=_extends({},this.values,normalizeObject(values,Duration.normalizeUnit));return clone$1(this,{values:mixed});
		};_proto.reconfigure=function reconfigure(_temp){
			var _ref=_temp===void 0?{}:_temp,locale=_ref.locale,numberingSystem=_ref.numberingSystem,conversionAccuracy=_ref.conversionAccuracy;var loc=this.loc.clone({locale:locale,numberingSystem:numberingSystem}),opts={loc:loc};if(conversionAccuracy){
				opts.conversionAccuracy=conversionAccuracy;
			}return clone$1(this,opts);
		};_proto.as=function as(unit){
			return this.isValid?this.shiftTo(unit).get(unit):NaN;
		};_proto.normalize=function normalize(){
			if(!this.isValid)return this;var vals=this.toObject();normalizeValues(this.matrix,vals);return clone$1(this,{values:vals},true);
		};_proto.shiftTo=function shiftTo(){
			for(var _len=arguments.length,units=new Array(_len),_key=0;_key<_len;_key++){
				units[_key]=arguments[_key];
			}if(!this.isValid)return this;if(units.length===0){
				return this;
			}units=units.map(function(u){
				return Duration.normalizeUnit(u);
			});var built={},accumulated={},vals=this.toObject();var lastUnit;for(var _iterator2=_createForOfIteratorHelperLoose(orderedUnits$1),_step2;!(_step2=_iterator2()).done;){
				var k=_step2.value;if(units.indexOf(k)>=0){
					lastUnit=k;var own=0;for(var ak in accumulated){
						own+=this.matrix[ak][k]*accumulated[ak];accumulated[ak]=0;
					}if(isNumber(vals[k])){
						own+=vals[k];
					}var i=Math.trunc(own);built[k]=i;accumulated[k]=(own*1e3-i*1e3)/1e3;for(var down in vals){
						if(orderedUnits$1.indexOf(down)>orderedUnits$1.indexOf(k)){
							convert(this.matrix,vals,down,built,k);
						}
					}
				}else if(isNumber(vals[k])){
					accumulated[k]=vals[k];
				}
			}for(var key in accumulated){
				if(accumulated[key]!==0){
					built[lastUnit]+=key===lastUnit?accumulated[key]:accumulated[key]/this.matrix[lastUnit][key];
				}
			}return clone$1(this,{values:built},true).normalize();
		};_proto.negate=function negate(){
			if(!this.isValid)return this;var negated={};for(var _i2=0,_Object$keys2=Object.keys(this.values);_i2<_Object$keys2.length;_i2++){
				var k=_Object$keys2[_i2];negated[k]=-this.values[k];
			}return clone$1(this,{values:negated},true);
		};_proto.equals=function equals(other){
			if(!this.isValid||!other.isValid){
				return false;
			}if(!this.loc.equals(other.loc)){
				return false;
			}function eq(v1,v2){
				if(v1===undefined||v1===0)return v2===undefined||v2===0;return v1===v2;
			}for(var _iterator3=_createForOfIteratorHelperLoose(orderedUnits$1),_step3;!(_step3=_iterator3()).done;){
				var u=_step3.value;if(!eq(this.values[u],other.values[u])){
					return false;
				}
			}return true;
		};_createClass(Duration,[{key:'locale',get:function get(){
			return this.isValid?this.loc.locale:null;
		}},{key:'numberingSystem',get:function get(){
			return this.isValid?this.loc.numberingSystem:null;
		}},{key:'years',get:function get(){
			return this.isValid?this.values.years||0:NaN;
		}},{key:'quarters',get:function get(){
			return this.isValid?this.values.quarters||0:NaN;
		}},{key:'months',get:function get(){
			return this.isValid?this.values.months||0:NaN;
		}},{key:'weeks',get:function get(){
			return this.isValid?this.values.weeks||0:NaN;
		}},{key:'days',get:function get(){
			return this.isValid?this.values.days||0:NaN;
		}},{key:'hours',get:function get(){
			return this.isValid?this.values.hours||0:NaN;
		}},{key:'minutes',get:function get(){
			return this.isValid?this.values.minutes||0:NaN;
		}},{key:'seconds',get:function get(){
			return this.isValid?this.values.seconds||0:NaN;
		}},{key:'milliseconds',get:function get(){
			return this.isValid?this.values.milliseconds||0:NaN;
		}},{key:'isValid',get:function get(){
			return this.invalid===null;
		}},{key:'invalidReason',get:function get(){
			return this.invalid?this.invalid.reason:null;
		}},{key:'invalidExplanation',get:function get(){
			return this.invalid?this.invalid.explanation:null;
		}}]);return Duration;
	}();var INVALID$1='Invalid Interval';function validateStartEnd(start,end){
		if(!start||!start.isValid){
			return Interval.invalid('missing or invalid start');
		}else if(!end||!end.isValid){
			return Interval.invalid('missing or invalid end');
		}else if(end<start){
			return Interval.invalid('end before start','The end of an interval must be after its start, but you had start='+start.toISO()+' and end='+end.toISO());
		}else{
			return null;
		}
	}var Interval=function(){
		function Interval(config){
			this.s=config.start;this.e=config.end;this.invalid=config.invalid||null;this.isLuxonInterval=true;
		}Interval.invalid=function invalid(reason,explanation){
			if(explanation===void 0){
				explanation=null;
			}if(!reason){
				throw new InvalidArgumentError('need to specify a reason the Interval is invalid');
			}var invalid=reason instanceof Invalid?reason:new Invalid(reason,explanation);if(Settings.throwOnInvalid){
				throw new InvalidIntervalError(invalid);
			}else{
				return new Interval({invalid:invalid});
			}
		};Interval.fromDateTimes=function fromDateTimes(start,end){
			var builtStart=friendlyDateTime(start),builtEnd=friendlyDateTime(end);var validateError=validateStartEnd(builtStart,builtEnd);if(validateError==null){
				return new Interval({start:builtStart,end:builtEnd});
			}else{
				return validateError;
			}
		};Interval.after=function after(start,duration){
			var dur=Duration.fromDurationLike(duration),dt=friendlyDateTime(start);return Interval.fromDateTimes(dt,dt.plus(dur));
		};Interval.before=function before(end,duration){
			var dur=Duration.fromDurationLike(duration),dt=friendlyDateTime(end);return Interval.fromDateTimes(dt.minus(dur),dt);
		};Interval.fromISO=function fromISO(text,opts){
			var _split=(text||'').split('/',2),s=_split[0],e=_split[1];if(s&&e){
				var start,startIsValid;try{
					start=DateTime.fromISO(s,opts);startIsValid=start.isValid;
				}catch(e){
					startIsValid=false;
				}var end,endIsValid;try{
					end=DateTime.fromISO(e,opts);endIsValid=end.isValid;
				}catch(e){
					endIsValid=false;
				}if(startIsValid&&endIsValid){
					return Interval.fromDateTimes(start,end);
				}if(startIsValid){
					var dur=Duration.fromISO(e,opts);if(dur.isValid){
						return Interval.after(start,dur);
					}
				}else if(endIsValid){
					var _dur=Duration.fromISO(s,opts);if(_dur.isValid){
						return Interval.before(end,_dur);
					}
				}
			}return Interval.invalid('unparsable','the input "'+text+'" can\'t be parsed as ISO 8601');
		};Interval.isInterval=function isInterval(o){
			return o&&o.isLuxonInterval||false;
		};var _proto=Interval.prototype;_proto.length=function length(unit){
			if(unit===void 0){
				unit='milliseconds';
			}return this.isValid?this.toDuration.apply(this,[unit]).get(unit):NaN;
		};_proto.count=function count(unit){
			if(unit===void 0){
				unit='milliseconds';
			}if(!this.isValid)return NaN;var start=this.start.startOf(unit),end=this.end.startOf(unit);return Math.floor(end.diff(start,unit).get(unit))+1;
		};_proto.hasSame=function hasSame(unit){
			return this.isValid?this.isEmpty()||this.e.minus(1).hasSame(this.s,unit):false;
		};_proto.isEmpty=function isEmpty(){
			return this.s.valueOf()===this.e.valueOf();
		};_proto.isAfter=function isAfter(dateTime){
			if(!this.isValid)return false;return this.s>dateTime;
		};_proto.isBefore=function isBefore(dateTime){
			if(!this.isValid)return false;return this.e<=dateTime;
		};_proto.contains=function contains(dateTime){
			if(!this.isValid)return false;return this.s<=dateTime&&this.e>dateTime;
		};_proto.set=function set(_temp){
			var _ref=_temp===void 0?{}:_temp,start=_ref.start,end=_ref.end;if(!this.isValid)return this;return Interval.fromDateTimes(start||this.s,end||this.e);
		};_proto.splitAt=function splitAt(){
			var _this=this;if(!this.isValid)return[];for(var _len=arguments.length,dateTimes=new Array(_len),_key=0;_key<_len;_key++){
				dateTimes[_key]=arguments[_key];
			}var sorted=dateTimes.map(friendlyDateTime).filter(function(d){
					return _this.contains(d);
				}).sort(),results=[];var s=this.s,i=0;while(s<this.e){
				var added=sorted[i]||this.e,next=+added>+this.e?this.e:added;results.push(Interval.fromDateTimes(s,next));s=next;i+=1;
			}return results;
		};_proto.splitBy=function splitBy(duration){
			var dur=Duration.fromDurationLike(duration);if(!this.isValid||!dur.isValid||dur.as('milliseconds')===0){
				return[];
			}var s=this.s,idx=1,next;var results=[];while(s<this.e){
				var added=this.start.plus(dur.mapUnits(function(x){
					return x*idx;
				}));next=+added>+this.e?this.e:added;results.push(Interval.fromDateTimes(s,next));s=next;idx+=1;
			}return results;
		};_proto.divideEqually=function divideEqually(numberOfParts){
			if(!this.isValid)return[];return this.splitBy(this.length()/numberOfParts).slice(0,numberOfParts);
		};_proto.overlaps=function overlaps(other){
			return this.e>other.s&&this.s<other.e;
		};_proto.abutsStart=function abutsStart(other){
			if(!this.isValid)return false;return+this.e===+other.s;
		};_proto.abutsEnd=function abutsEnd(other){
			if(!this.isValid)return false;return+other.e===+this.s;
		};_proto.engulfs=function engulfs(other){
			if(!this.isValid)return false;return this.s<=other.s&&this.e>=other.e;
		};_proto.equals=function equals(other){
			if(!this.isValid||!other.isValid){
				return false;
			}return this.s.equals(other.s)&&this.e.equals(other.e);
		};_proto.intersection=function intersection(other){
			if(!this.isValid)return this;var s=this.s>other.s?this.s:other.s,e=this.e<other.e?this.e:other.e;if(s>=e){
				return null;
			}else{
				return Interval.fromDateTimes(s,e);
			}
		};_proto.union=function union(other){
			if(!this.isValid)return this;var s=this.s<other.s?this.s:other.s,e=this.e>other.e?this.e:other.e;return Interval.fromDateTimes(s,e);
		};Interval.merge=function merge(intervals){
			var _intervals$sort$reduc=intervals.sort(function(a,b){
					return a.s-b.s;
				}).reduce(function(_ref2,item){
					var sofar=_ref2[0],current=_ref2[1];if(!current){
						return[sofar,item];
					}else if(current.overlaps(item)||current.abutsStart(item)){
						return[sofar,current.union(item)];
					}else{
						return[sofar.concat([current]),item];
					}
				},[[],null]),found=_intervals$sort$reduc[0],final=_intervals$sort$reduc[1];if(final){
				found.push(final);
			}return found;
		};Interval.xor=function xor(intervals){
			var _Array$prototype;var start=null,currentCount=0;var results=[],ends=intervals.map(function(i){
					return[{time:i.s,type:'s'},{time:i.e,type:'e'}];
				}),flattened=(_Array$prototype=Array.prototype).concat.apply(_Array$prototype,ends),arr=flattened.sort(function(a,b){
					return a.time-b.time;
				});for(var _iterator=_createForOfIteratorHelperLoose(arr),_step;!(_step=_iterator()).done;){
				var i=_step.value;currentCount+=i.type==='s'?1:-1;if(currentCount===1){
					start=i.time;
				}else{
					if(start&&+start!==+i.time){
						results.push(Interval.fromDateTimes(start,i.time));
					}start=null;
				}
			}return Interval.merge(results);
		};_proto.difference=function difference(){
			var _this2=this;for(var _len2=arguments.length,intervals=new Array(_len2),_key2=0;_key2<_len2;_key2++){
				intervals[_key2]=arguments[_key2];
			}return Interval.xor([this].concat(intervals)).map(function(i){
				return _this2.intersection(i);
			}).filter(function(i){
				return i&&!i.isEmpty();
			});
		};_proto.toString=function toString(){
			if(!this.isValid)return INVALID$1;return'['+this.s.toISO()+' – '+this.e.toISO()+')';
		};_proto.toISO=function toISO(opts){
			if(!this.isValid)return INVALID$1;return this.s.toISO(opts)+'/'+this.e.toISO(opts);
		};_proto.toISODate=function toISODate(){
			if(!this.isValid)return INVALID$1;return this.s.toISODate()+'/'+this.e.toISODate();
		};_proto.toISOTime=function toISOTime(opts){
			if(!this.isValid)return INVALID$1;return this.s.toISOTime(opts)+'/'+this.e.toISOTime(opts);
		};_proto.toFormat=function toFormat(dateFormat,_temp2){
			var _ref3=_temp2===void 0?{}:_temp2,_ref3$separator=_ref3.separator,separator=_ref3$separator===void 0?' – ':_ref3$separator;if(!this.isValid)return INVALID$1;return''+this.s.toFormat(dateFormat)+separator+this.e.toFormat(dateFormat);
		};_proto.toDuration=function toDuration(unit,opts){
			if(!this.isValid){
				return Duration.invalid(this.invalidReason);
			}return this.e.diff(this.s,unit,opts);
		};_proto.mapEndpoints=function mapEndpoints(mapFn){
			return Interval.fromDateTimes(mapFn(this.s),mapFn(this.e));
		};_createClass(Interval,[{key:'start',get:function get(){
			return this.isValid?this.s:null;
		}},{key:'end',get:function get(){
			return this.isValid?this.e:null;
		}},{key:'isValid',get:function get(){
			return this.invalidReason===null;
		}},{key:'invalidReason',get:function get(){
			return this.invalid?this.invalid.reason:null;
		}},{key:'invalidExplanation',get:function get(){
			return this.invalid?this.invalid.explanation:null;
		}}]);return Interval;
	}();var Info=function(){
		function Info(){}Info.hasDST=function hasDST(zone){
			if(zone===void 0){
				zone=Settings.defaultZone;
			}var proto=DateTime.now().setZone(zone).set({month:12});return!zone.isUniversal&&proto.offset!==proto.set({month:6}).offset;
		};Info.isValidIANAZone=function isValidIANAZone(zone){
			return IANAZone.isValidSpecifier(zone)&&IANAZone.isValidZone(zone);
		};Info.normalizeZone=function normalizeZone$1(input){
			return normalizeZone(input,Settings.defaultZone);
		};Info.months=function months(length,_temp){
			if(length===void 0){
				length='long';
			}var _ref=_temp===void 0?{}:_temp,_ref$locale=_ref.locale,locale=_ref$locale===void 0?null:_ref$locale,_ref$numberingSystem=_ref.numberingSystem,numberingSystem=_ref$numberingSystem===void 0?null:_ref$numberingSystem,_ref$locObj=_ref.locObj,locObj=_ref$locObj===void 0?null:_ref$locObj,_ref$outputCalendar=_ref.outputCalendar,outputCalendar=_ref$outputCalendar===void 0?'gregory':_ref$outputCalendar;return(locObj||Locale.create(locale,numberingSystem,outputCalendar)).months(length);
		};Info.monthsFormat=function monthsFormat(length,_temp2){
			if(length===void 0){
				length='long';
			}var _ref2=_temp2===void 0?{}:_temp2,_ref2$locale=_ref2.locale,locale=_ref2$locale===void 0?null:_ref2$locale,_ref2$numberingSystem=_ref2.numberingSystem,numberingSystem=_ref2$numberingSystem===void 0?null:_ref2$numberingSystem,_ref2$locObj=_ref2.locObj,locObj=_ref2$locObj===void 0?null:_ref2$locObj,_ref2$outputCalendar=_ref2.outputCalendar,outputCalendar=_ref2$outputCalendar===void 0?'gregory':_ref2$outputCalendar;return(locObj||Locale.create(locale,numberingSystem,outputCalendar)).months(length,true);
		};Info.weekdays=function weekdays(length,_temp3){
			if(length===void 0){
				length='long';
			}var _ref3=_temp3===void 0?{}:_temp3,_ref3$locale=_ref3.locale,locale=_ref3$locale===void 0?null:_ref3$locale,_ref3$numberingSystem=_ref3.numberingSystem,numberingSystem=_ref3$numberingSystem===void 0?null:_ref3$numberingSystem,_ref3$locObj=_ref3.locObj,locObj=_ref3$locObj===void 0?null:_ref3$locObj;return(locObj||Locale.create(locale,numberingSystem,null)).weekdays(length);
		};Info.weekdaysFormat=function weekdaysFormat(length,_temp4){
			if(length===void 0){
				length='long';
			}var _ref4=_temp4===void 0?{}:_temp4,_ref4$locale=_ref4.locale,locale=_ref4$locale===void 0?null:_ref4$locale,_ref4$numberingSystem=_ref4.numberingSystem,numberingSystem=_ref4$numberingSystem===void 0?null:_ref4$numberingSystem,_ref4$locObj=_ref4.locObj,locObj=_ref4$locObj===void 0?null:_ref4$locObj;return(locObj||Locale.create(locale,numberingSystem,null)).weekdays(length,true);
		};Info.meridiems=function meridiems(_temp5){
			var _ref5=_temp5===void 0?{}:_temp5,_ref5$locale=_ref5.locale,locale=_ref5$locale===void 0?null:_ref5$locale;return Locale.create(locale).meridiems();
		};Info.eras=function eras(length,_temp6){
			if(length===void 0){
				length='short';
			}var _ref6=_temp6===void 0?{}:_temp6,_ref6$locale=_ref6.locale,locale=_ref6$locale===void 0?null:_ref6$locale;return Locale.create(locale,null,'gregory').eras(length);
		};Info.features=function features(){
			return{relative:hasRelative()};
		};return Info;
	}();function dayDiff(earlier,later){
		var utcDayStart=function utcDayStart(dt){
				return dt.toUTC(0,{keepLocalTime:true}).startOf('day').valueOf();
			},ms=utcDayStart(later)-utcDayStart(earlier);return Math.floor(Duration.fromMillis(ms).as('days'));
	}function highOrderDiffs(cursor,later,units){
		var differs=[['years',function(a,b){
			return b.year-a.year;
		}],['quarters',function(a,b){
			return b.quarter-a.quarter;
		}],['months',function(a,b){
			return b.month-a.month+(b.year-a.year)*12;
		}],['weeks',function(a,b){
			var days=dayDiff(a,b);return(days-days%7)/7;
		}],['days',dayDiff]];var results={};var lowestOrder,highWater;for(var _i=0,_differs=differs;_i<_differs.length;_i++){
			var _differs$_i=_differs[_i],unit=_differs$_i[0],differ=_differs$_i[1];if(units.indexOf(unit)>=0){
				var _cursor$plus;lowestOrder=unit;var delta=differ(cursor,later);highWater=cursor.plus((_cursor$plus={},_cursor$plus[unit]=delta,_cursor$plus));if(highWater>later){
					var _cursor$plus2;cursor=cursor.plus((_cursor$plus2={},_cursor$plus2[unit]=delta-1,_cursor$plus2));delta-=1;
				}else{
					cursor=highWater;
				}results[unit]=delta;
			}
		}return[cursor,results,highWater,lowestOrder];
	}function _diff(earlier,later,units,opts){
		var _highOrderDiffs=highOrderDiffs(earlier,later,units),cursor=_highOrderDiffs[0],results=_highOrderDiffs[1],highWater=_highOrderDiffs[2],lowestOrder=_highOrderDiffs[3];var remainingMillis=later-cursor;var lowerOrderUnits=units.filter(function(u){
			return['hours','minutes','seconds','milliseconds'].indexOf(u)>=0;
		});if(lowerOrderUnits.length===0){
			if(highWater<later){
				var _cursor$plus3;highWater=cursor.plus((_cursor$plus3={},_cursor$plus3[lowestOrder]=1,_cursor$plus3));
			}if(highWater!==cursor){
				results[lowestOrder]=(results[lowestOrder]||0)+remainingMillis/(highWater-cursor);
			}
		}var duration=Duration.fromObject(results,opts);if(lowerOrderUnits.length>0){
			var _Duration$fromMillis;return(_Duration$fromMillis=Duration.fromMillis(remainingMillis,opts)).shiftTo.apply(_Duration$fromMillis,lowerOrderUnits).plus(duration);
		}else{
			return duration;
		}
	}var numberingSystems={arab:'[٠-٩]',arabext:'[۰-۹]',bali:'[᭐-᭙]',beng:'[০-৯]',deva:'[०-९]',fullwide:'[０-９]',gujr:'[૦-૯]',hanidec:'[〇|一|二|三|四|五|六|七|八|九]',khmr:'[០-៩]',knda:'[೦-೯]',laoo:'[໐-໙]',limb:'[᥆-᥏]',mlym:'[൦-൯]',mong:'[᠐-᠙]',mymr:'[၀-၉]',orya:'[୦-୯]',tamldec:'[௦-௯]',telu:'[౦-౯]',thai:'[๐-๙]',tibt:'[༠-༩]',latn:'\\d'};var numberingSystemsUTF16={arab:[1632,1641],arabext:[1776,1785],bali:[6992,7001],beng:[2534,2543],deva:[2406,2415],fullwide:[65296,65303],gujr:[2790,2799],khmr:[6112,6121],knda:[3302,3311],laoo:[3792,3801],limb:[6470,6479],mlym:[3430,3439],mong:[6160,6169],mymr:[4160,4169],orya:[2918,2927],tamldec:[3046,3055],telu:[3174,3183],thai:[3664,3673],tibt:[3872,3881]};var hanidecChars=numberingSystems.hanidec.replace(/[\[|\]]/g,'').split('');function parseDigits(str){
		var value=parseInt(str,10);if(isNaN(value)){
			value='';for(var i=0;i<str.length;i++){
				var code=str.charCodeAt(i);if(str[i].search(numberingSystems.hanidec)!==-1){
					value+=hanidecChars.indexOf(str[i]);
				}else{
					for(var key in numberingSystemsUTF16){
						var _numberingSystemsUTF=numberingSystemsUTF16[key],min=_numberingSystemsUTF[0],max=_numberingSystemsUTF[1];if(code>=min&&code<=max){
							value+=code-min;
						}
					}
				}
			}return parseInt(value,10);
		}else{
			return value;
		}
	}function digitRegex(_ref,append){
		var numberingSystem=_ref.numberingSystem;if(append===void 0){
			append='';
		}return new RegExp(''+numberingSystems[numberingSystem||'latn']+append);
	}var MISSING_FTP='missing Intl.DateTimeFormat.formatToParts support';function intUnit(regex,post){
		if(post===void 0){
			post=function post(i){
				return i;
			};
		}return{regex:regex,deser:function deser(_ref){
			var s=_ref[0];return post(parseDigits(s));
		}};
	}var NBSP=String.fromCharCode(160);var spaceOrNBSP='( |'+NBSP+')';var spaceOrNBSPRegExp=new RegExp(spaceOrNBSP,'g');function fixListRegex(s){
		return s.replace(/\./g,'\\.?').replace(spaceOrNBSPRegExp,spaceOrNBSP);
	}function stripInsensitivities(s){
		return s.replace(/\./g,'').replace(spaceOrNBSPRegExp,' ').toLowerCase();
	}function oneOf(strings,startIndex){
		if(strings===null){
			return null;
		}else{
			return{regex:RegExp(strings.map(fixListRegex).join('|')),deser:function deser(_ref2){
				var s=_ref2[0];return strings.findIndex(function(i){
					return stripInsensitivities(s)===stripInsensitivities(i);
				})+startIndex;
			}};
		}
	}function offset(regex,groups){
		return{regex:regex,deser:function deser(_ref3){
			var h=_ref3[1],m=_ref3[2];return signedOffset(h,m);
		},groups:groups};
	}function simple(regex){
		return{regex:regex,deser:function deser(_ref4){
			var s=_ref4[0];return s;
		}};
	}function escapeToken(value){
		return value.replace(/[\-\[\]{}()*+?.,\\\^$|#\s]/g,'\\$&');
	}function unitForToken(token,loc){
		var one=digitRegex(loc),two=digitRegex(loc,'{2}'),three=digitRegex(loc,'{3}'),four=digitRegex(loc,'{4}'),six=digitRegex(loc,'{6}'),oneOrTwo=digitRegex(loc,'{1,2}'),oneToThree=digitRegex(loc,'{1,3}'),oneToSix=digitRegex(loc,'{1,6}'),oneToNine=digitRegex(loc,'{1,9}'),twoToFour=digitRegex(loc,'{2,4}'),fourToSix=digitRegex(loc,'{4,6}'),literal=function literal(t){
				return{regex:RegExp(escapeToken(t.val)),deser:function deser(_ref5){
					var s=_ref5[0];return s;
				},literal:true};
			},unitate=function unitate(t){
				if(token.literal){
					return literal(t);
				}switch(t.val){
				case'G':return oneOf(loc.eras('short',false),0);case'GG':return oneOf(loc.eras('long',false),0);case'y':return intUnit(oneToSix);case'yy':return intUnit(twoToFour,untruncateYear);case'yyyy':return intUnit(four);case'yyyyy':return intUnit(fourToSix);case'yyyyyy':return intUnit(six);case'M':return intUnit(oneOrTwo);case'MM':return intUnit(two);case'MMM':return oneOf(loc.months('short',true,false),1);case'MMMM':return oneOf(loc.months('long',true,false),1);case'L':return intUnit(oneOrTwo);case'LL':return intUnit(two);case'LLL':return oneOf(loc.months('short',false,false),1);case'LLLL':return oneOf(loc.months('long',false,false),1);case'd':return intUnit(oneOrTwo);case'dd':return intUnit(two);case'o':return intUnit(oneToThree);case'ooo':return intUnit(three);case'HH':return intUnit(two);case'H':return intUnit(oneOrTwo);case'hh':return intUnit(two);case'h':return intUnit(oneOrTwo);case'mm':return intUnit(two);case'm':return intUnit(oneOrTwo);case'q':return intUnit(oneOrTwo);case'qq':return intUnit(two);case's':return intUnit(oneOrTwo);case'ss':return intUnit(two);case'S':return intUnit(oneToThree);case'SSS':return intUnit(three);case'u':return simple(oneToNine);case'uu':return simple(oneOrTwo);case'uuu':return intUnit(one);case'a':return oneOf(loc.meridiems(),0);case'kkkk':return intUnit(four);case'kk':return intUnit(twoToFour,untruncateYear);case'W':return intUnit(oneOrTwo);case'WW':return intUnit(two);case'E':case'c':return intUnit(one);case'EEE':return oneOf(loc.weekdays('short',false,false),1);case'EEEE':return oneOf(loc.weekdays('long',false,false),1);case'ccc':return oneOf(loc.weekdays('short',true,false),1);case'cccc':return oneOf(loc.weekdays('long',true,false),1);case'Z':case'ZZ':return offset(new RegExp('([+-]'+oneOrTwo.source+')(?::('+two.source+'))?'),2);case'ZZZ':return offset(new RegExp('([+-]'+oneOrTwo.source+')('+two.source+')?'),2);case'z':return simple(/[a-z_+-/]{1,256}?/i);default:return literal(t);
				}
			};var unit=unitate(token)||{invalidReason:MISSING_FTP};unit.token=token;return unit;
	}var partTypeStyleToTokenVal={year:{'2-digit':'yy',numeric:'yyyyy'},month:{numeric:'M','2-digit':'MM',short:'MMM',long:'MMMM'},day:{numeric:'d','2-digit':'dd'},weekday:{short:'EEE',long:'EEEE'},dayperiod:'a',dayPeriod:'a',hour:{numeric:'h','2-digit':'hh'},minute:{numeric:'m','2-digit':'mm'},second:{numeric:'s','2-digit':'ss'}};function tokenForPart(part,locale,formatOpts){
		var type=part.type,value=part.value;if(type==='literal'){
			return{literal:true,val:value};
		}var style=formatOpts[type];var val=partTypeStyleToTokenVal[type];if(typeof val==='object'){
			val=val[style];
		}if(val){
			return{literal:false,val:val};
		}return undefined;
	}function buildRegex(units){
		var re=units.map(function(u){
			return u.regex;
		}).reduce(function(f,r){
			return f+'('+r.source+')';
		},'');return['^'+re+'$',units];
	}function match(input,regex,handlers){
		var matches=input.match(regex);if(matches){
			var all={};var matchIndex=1;for(var i in handlers){
				if(hasOwnProperty(handlers,i)){
					var h=handlers[i],groups=h.groups?h.groups+1:1;if(!h.literal&&h.token){
						all[h.token.val[0]]=h.deser(matches.slice(matchIndex,matchIndex+groups));
					}matchIndex+=groups;
				}
			}return[matches,all];
		}else{
			return[matches,{}];
		}
	}function dateTimeFromMatches(matches){
		var toField=function toField(token){
			switch(token){
			case'S':return'millisecond';case's':return'second';case'm':return'minute';case'h':case'H':return'hour';case'd':return'day';case'o':return'ordinal';case'L':case'M':return'month';case'y':return'year';case'E':case'c':return'weekday';case'W':return'weekNumber';case'k':return'weekYear';case'q':return'quarter';default:return null;
			}
		};var zone=null;var specificOffset;if(!isUndefined(matches.z)){
			zone=IANAZone.create(matches.z);
		}if(!isUndefined(matches.Z)){
			if(!zone){
				zone=new FixedOffsetZone(matches.Z);
			}specificOffset=matches.Z;
		}if(!isUndefined(matches.q)){
			matches.M=(matches.q-1)*3+1;
		}if(!isUndefined(matches.h)){
			if(matches.h<12&&matches.a===1){
				matches.h+=12;
			}else if(matches.h===12&&matches.a===0){
				matches.h=0;
			}
		}if(matches.G===0&&matches.y){
			matches.y=-matches.y;
		}if(!isUndefined(matches.u)){
			matches.S=parseMillis(matches.u);
		}var vals=Object.keys(matches).reduce(function(r,k){
			var f=toField(k);if(f){
				r[f]=matches[k];
			}return r;
		},{});return[vals,zone,specificOffset];
	}var dummyDateTimeCache=null;function getDummyDateTime(){
		if(!dummyDateTimeCache){
			dummyDateTimeCache=DateTime.fromMillis(1555555555555);
		}return dummyDateTimeCache;
	}function maybeExpandMacroToken(token,locale){
		if(token.literal){
			return token;
		}var formatOpts=Formatter.macroTokenToFormatOpts(token.val);if(!formatOpts){
			return token;
		}var formatter=Formatter.create(locale,formatOpts);var parts=formatter.formatDateTimeParts(getDummyDateTime());var tokens=parts.map(function(p){
			return tokenForPart(p,locale,formatOpts);
		});if(tokens.includes(undefined)){
			return token;
		}return tokens;
	}function expandMacroTokens(tokens,locale){
		var _Array$prototype;return(_Array$prototype=Array.prototype).concat.apply(_Array$prototype,tokens.map(function(t){
			return maybeExpandMacroToken(t,locale);
		}));
	}function explainFromTokens(locale,input,format){
		var tokens=expandMacroTokens(Formatter.parseFormat(format),locale),units=tokens.map(function(t){
				return unitForToken(t,locale);
			}),disqualifyingUnit=units.find(function(t){
				return t.invalidReason;
			});if(disqualifyingUnit){
			return{input:input,tokens:tokens,invalidReason:disqualifyingUnit.invalidReason};
		}else{
			var _buildRegex=buildRegex(units),regexString=_buildRegex[0],handlers=_buildRegex[1],regex=RegExp(regexString,'i'),_match=match(input,regex,handlers),rawMatches=_match[0],matches=_match[1],_ref6=matches?dateTimeFromMatches(matches):[null,null,undefined],result=_ref6[0],zone=_ref6[1],specificOffset=_ref6[2];if(hasOwnProperty(matches,'a')&&hasOwnProperty(matches,'H')){
				throw new ConflictingSpecificationError('Can\'t include meridiem when specifying 24-hour format');
			}return{input:input,tokens:tokens,regex:regex,rawMatches:rawMatches,matches:matches,result:result,zone:zone,specificOffset:specificOffset};
		}
	}function parseFromTokens(locale,input,format){
		var _explainFromTokens=explainFromTokens(locale,input,format),result=_explainFromTokens.result,zone=_explainFromTokens.zone,specificOffset=_explainFromTokens.specificOffset,invalidReason=_explainFromTokens.invalidReason;return[result,zone,specificOffset,invalidReason];
	}var nonLeapLadder=[0,31,59,90,120,151,181,212,243,273,304,334],leapLadder=[0,31,60,91,121,152,182,213,244,274,305,335];function unitOutOfRange(unit,value){
		return new Invalid('unit out of range','you specified '+value+' (of type '+typeof value+') as a '+unit+', which is invalid');
	}function dayOfWeek(year,month,day){
		var js=new Date(Date.UTC(year,month-1,day)).getUTCDay();return js===0?7:js;
	}function computeOrdinal(year,month,day){
		return day+(isLeapYear(year)?leapLadder:nonLeapLadder)[month-1];
	}function uncomputeOrdinal(year,ordinal){
		var table=isLeapYear(year)?leapLadder:nonLeapLadder,month0=table.findIndex(function(i){
				return i<ordinal;
			}),day=ordinal-table[month0];return{month:month0+1,day:day};
	}function gregorianToWeek(gregObj){
		var year=gregObj.year,month=gregObj.month,day=gregObj.day,ordinal=computeOrdinal(year,month,day),weekday=dayOfWeek(year,month,day);var weekNumber=Math.floor((ordinal-weekday+10)/7),weekYear;if(weekNumber<1){
			weekYear=year-1;weekNumber=weeksInWeekYear(weekYear);
		}else if(weekNumber>weeksInWeekYear(year)){
			weekYear=year+1;weekNumber=1;
		}else{
			weekYear=year;
		}return _extends({weekYear:weekYear,weekNumber:weekNumber,weekday:weekday},timeObject(gregObj));
	}function weekToGregorian(weekData){
		var weekYear=weekData.weekYear,weekNumber=weekData.weekNumber,weekday=weekData.weekday,weekdayOfJan4=dayOfWeek(weekYear,1,4),yearInDays=daysInYear(weekYear);var ordinal=weekNumber*7+weekday-weekdayOfJan4-3,year;if(ordinal<1){
			year=weekYear-1;ordinal+=daysInYear(year);
		}else if(ordinal>yearInDays){
			year=weekYear+1;ordinal-=daysInYear(weekYear);
		}else{
			year=weekYear;
		}var _uncomputeOrdinal=uncomputeOrdinal(year,ordinal),month=_uncomputeOrdinal.month,day=_uncomputeOrdinal.day;return _extends({year:year,month:month,day:day},timeObject(weekData));
	}function gregorianToOrdinal(gregData){
		var year=gregData.year,month=gregData.month,day=gregData.day;var ordinal=computeOrdinal(year,month,day);return _extends({year:year,ordinal:ordinal},timeObject(gregData));
	}function ordinalToGregorian(ordinalData){
		var year=ordinalData.year,ordinal=ordinalData.ordinal;var _uncomputeOrdinal2=uncomputeOrdinal(year,ordinal),month=_uncomputeOrdinal2.month,day=_uncomputeOrdinal2.day;return _extends({year:year,month:month,day:day},timeObject(ordinalData));
	}function hasInvalidWeekData(obj){
		var validYear=isInteger(obj.weekYear),validWeek=integerBetween(obj.weekNumber,1,weeksInWeekYear(obj.weekYear)),validWeekday=integerBetween(obj.weekday,1,7);if(!validYear){
			return unitOutOfRange('weekYear',obj.weekYear);
		}else if(!validWeek){
			return unitOutOfRange('week',obj.week);
		}else if(!validWeekday){
			return unitOutOfRange('weekday',obj.weekday);
		}else return false;
	}function hasInvalidOrdinalData(obj){
		var validYear=isInteger(obj.year),validOrdinal=integerBetween(obj.ordinal,1,daysInYear(obj.year));if(!validYear){
			return unitOutOfRange('year',obj.year);
		}else if(!validOrdinal){
			return unitOutOfRange('ordinal',obj.ordinal);
		}else return false;
	}function hasInvalidGregorianData(obj){
		var validYear=isInteger(obj.year),validMonth=integerBetween(obj.month,1,12),validDay=integerBetween(obj.day,1,daysInMonth(obj.year,obj.month));if(!validYear){
			return unitOutOfRange('year',obj.year);
		}else if(!validMonth){
			return unitOutOfRange('month',obj.month);
		}else if(!validDay){
			return unitOutOfRange('day',obj.day);
		}else return false;
	}function hasInvalidTimeData(obj){
		var hour=obj.hour,minute=obj.minute,second=obj.second,millisecond=obj.millisecond;var validHour=integerBetween(hour,0,23)||hour===24&&minute===0&&second===0&&millisecond===0,validMinute=integerBetween(minute,0,59),validSecond=integerBetween(second,0,59),validMillisecond=integerBetween(millisecond,0,999);if(!validHour){
			return unitOutOfRange('hour',hour);
		}else if(!validMinute){
			return unitOutOfRange('minute',minute);
		}else if(!validSecond){
			return unitOutOfRange('second',second);
		}else if(!validMillisecond){
			return unitOutOfRange('millisecond',millisecond);
		}else return false;
	}var INVALID='Invalid DateTime';var MAX_DATE=864e13;function unsupportedZone(zone){
		return new Invalid('unsupported zone','the zone "'+zone.name+'" is not supported');
	}function possiblyCachedWeekData(dt){
		if(dt.weekData===null){
			dt.weekData=gregorianToWeek(dt.c);
		}return dt.weekData;
	}function clone(inst,alts){
		var current={ts:inst.ts,zone:inst.zone,c:inst.c,o:inst.o,loc:inst.loc,invalid:inst.invalid};return new DateTime(_extends({},current,alts,{old:current}));
	}function fixOffset(localTS,o,tz){
		var utcGuess=localTS-o*60*1e3;var o2=tz.offset(utcGuess);if(o===o2){
			return[utcGuess,o];
		}utcGuess-=(o2-o)*60*1e3;var o3=tz.offset(utcGuess);if(o2===o3){
			return[utcGuess,o2];
		}return[localTS-Math.min(o2,o3)*60*1e3,Math.max(o2,o3)];
	}function tsToObj(ts,offset){
		ts+=offset*60*1e3;var d=new Date(ts);return{year:d.getUTCFullYear(),month:d.getUTCMonth()+1,day:d.getUTCDate(),hour:d.getUTCHours(),minute:d.getUTCMinutes(),second:d.getUTCSeconds(),millisecond:d.getUTCMilliseconds()};
	}function objToTS(obj,offset,zone){
		return fixOffset(objToLocalTS(obj),offset,zone);
	}function adjustTime(inst,dur){
		var oPre=inst.o,year=inst.c.year+Math.trunc(dur.years),month=inst.c.month+Math.trunc(dur.months)+Math.trunc(dur.quarters)*3,c=_extends({},inst.c,{year:year,month:month,day:Math.min(inst.c.day,daysInMonth(year,month))+Math.trunc(dur.days)+Math.trunc(dur.weeks)*7}),millisToAdd=Duration.fromObject({years:dur.years-Math.trunc(dur.years),quarters:dur.quarters-Math.trunc(dur.quarters),months:dur.months-Math.trunc(dur.months),weeks:dur.weeks-Math.trunc(dur.weeks),days:dur.days-Math.trunc(dur.days),hours:dur.hours,minutes:dur.minutes,seconds:dur.seconds,milliseconds:dur.milliseconds}).as('milliseconds'),localTS=objToLocalTS(c);var _fixOffset=fixOffset(localTS,oPre,inst.zone),ts=_fixOffset[0],o=_fixOffset[1];if(millisToAdd!==0){
			ts+=millisToAdd;o=inst.zone.offset(ts);
		}return{ts:ts,o:o};
	}function parseDataToDateTime(parsed,parsedZone,opts,format,text,specificOffset){
		var setZone=opts.setZone,zone=opts.zone;if(parsed&&Object.keys(parsed).length!==0){
			var interpretationZone=parsedZone||zone,inst=DateTime.fromObject(parsed,_extends({},opts,{zone:interpretationZone,specificOffset:specificOffset}));return setZone?inst:inst.setZone(zone);
		}else{
			return DateTime.invalid(new Invalid('unparsable','the input "'+text+'" can\'t be parsed as '+format));
		}
	}function toTechFormat(dt,format,allowZ){
		if(allowZ===void 0){
			allowZ=true;
		}return dt.isValid?Formatter.create(Locale.create('en-US'),{allowZ:allowZ,forceSimple:true}).formatDateTimeFromString(dt,format):null;
	}function toTechTimeFormat(dt,_ref){
		var _ref$suppressSeconds=_ref.suppressSeconds,suppressSeconds=_ref$suppressSeconds===void 0?false:_ref$suppressSeconds,_ref$suppressMillisec=_ref.suppressMilliseconds,suppressMilliseconds=_ref$suppressMillisec===void 0?false:_ref$suppressMillisec,includeOffset=_ref.includeOffset,_ref$includePrefix=_ref.includePrefix,includePrefix=_ref$includePrefix===void 0?false:_ref$includePrefix,_ref$includeZone=_ref.includeZone,includeZone=_ref$includeZone===void 0?false:_ref$includeZone,_ref$spaceZone=_ref.spaceZone,spaceZone=_ref$spaceZone===void 0?false:_ref$spaceZone,_ref$format=_ref.format,format=_ref$format===void 0?'extended':_ref$format;var fmt=format==='basic'?'HHmm':'HH:mm';if(!suppressSeconds||dt.second!==0||dt.millisecond!==0){
			fmt+=format==='basic'?'ss':':ss';if(!suppressMilliseconds||dt.millisecond!==0){
				fmt+='.SSS';
			}
		}if((includeZone||includeOffset)&&spaceZone){
			fmt+=' ';
		}if(includeZone){
			fmt+='z';
		}else if(includeOffset){
			fmt+=format==='basic'?'ZZZ':'ZZ';
		}var str=toTechFormat(dt,fmt);if(includePrefix){
			str='T'+str;
		}return str;
	}var defaultUnitValues={month:1,day:1,hour:0,minute:0,second:0,millisecond:0},defaultWeekUnitValues={weekNumber:1,weekday:1,hour:0,minute:0,second:0,millisecond:0},defaultOrdinalUnitValues={ordinal:1,hour:0,minute:0,second:0,millisecond:0};var orderedUnits=['year','month','day','hour','minute','second','millisecond'],orderedWeekUnits=['weekYear','weekNumber','weekday','hour','minute','second','millisecond'],orderedOrdinalUnits=['year','ordinal','hour','minute','second','millisecond'];function normalizeUnit(unit){
		var normalized={year:'year',years:'year',month:'month',months:'month',day:'day',days:'day',hour:'hour',hours:'hour',minute:'minute',minutes:'minute',quarter:'quarter',quarters:'quarter',second:'second',seconds:'second',millisecond:'millisecond',milliseconds:'millisecond',weekday:'weekday',weekdays:'weekday',weeknumber:'weekNumber',weeksnumber:'weekNumber',weeknumbers:'weekNumber',weekyear:'weekYear',weekyears:'weekYear',ordinal:'ordinal'}[unit.toLowerCase()];if(!normalized)throw new InvalidUnitError(unit);return normalized;
	}function quickDT(obj,opts){
		var zone=normalizeZone(opts.zone,Settings.defaultZone),loc=Locale.fromObject(opts),tsNow=Settings.now();var ts,o;if(!isUndefined(obj.year)){
			for(var _iterator=_createForOfIteratorHelperLoose(orderedUnits),_step;!(_step=_iterator()).done;){
				var u=_step.value;if(isUndefined(obj[u])){
					obj[u]=defaultUnitValues[u];
				}
			}var invalid=hasInvalidGregorianData(obj)||hasInvalidTimeData(obj);if(invalid){
				return DateTime.invalid(invalid);
			}var offsetProvis=zone.offset(tsNow);var _objToTS=objToTS(obj,offsetProvis,zone);ts=_objToTS[0];o=_objToTS[1];
		}else{
			ts=tsNow;
		}return new DateTime({ts:ts,zone:zone,loc:loc,o:o});
	}function diffRelative(start,end,opts){
		var round=isUndefined(opts.round)?true:opts.round,format=function format(c,unit){
				c=roundTo(c,round||opts.calendary?0:2,true);var formatter=end.loc.clone(opts).relFormatter(opts);return formatter.format(c,unit);
			},differ=function differ(unit){
				if(opts.calendary){
					if(!end.hasSame(start,unit)){
						return end.startOf(unit).diff(start.startOf(unit),unit).get(unit);
					}else return 0;
				}else{
					return end.diff(start,unit).get(unit);
				}
			};if(opts.unit){
			return format(differ(opts.unit),opts.unit);
		}for(var _iterator2=_createForOfIteratorHelperLoose(opts.units),_step2;!(_step2=_iterator2()).done;){
			var unit=_step2.value;var count=differ(unit);if(Math.abs(count)>=1){
				return format(count,unit);
			}
		}return format(start>end?-0:0,opts.units[opts.units.length-1]);
	}function lastOpts(argList){
		var opts={},args;if(argList.length>0&&typeof argList[argList.length-1]==='object'){
			opts=argList[argList.length-1];args=Array.from(argList).slice(0,argList.length-1);
		}else{
			args=Array.from(argList);
		}return[opts,args];
	}var DateTime=function(){
		function DateTime(config){
			var zone=config.zone||Settings.defaultZone;var invalid=config.invalid||(Number.isNaN(config.ts)?new Invalid('invalid input'):null)||(!zone.isValid?unsupportedZone(zone):null);this.ts=isUndefined(config.ts)?Settings.now():config.ts;var c=null,o=null;if(!invalid){
				var unchanged=config.old&&config.old.ts===this.ts&&config.old.zone.equals(zone);if(unchanged){
					var _ref2=[config.old.c,config.old.o];c=_ref2[0];o=_ref2[1];
				}else{
					var ot=zone.offset(this.ts);c=tsToObj(this.ts,ot);invalid=Number.isNaN(c.year)?new Invalid('invalid input'):null;c=invalid?null:c;o=invalid?null:ot;
				}
			}this._zone=zone;this.loc=config.loc||Locale.create();this.invalid=invalid;this.weekData=null;this.c=c;this.o=o;this.isLuxonDateTime=true;
		}DateTime.now=function now(){
			return new DateTime({});
		};DateTime.local=function local(){
			var _lastOpts=lastOpts(arguments),opts=_lastOpts[0],args=_lastOpts[1],year=args[0],month=args[1],day=args[2],hour=args[3],minute=args[4],second=args[5],millisecond=args[6];return quickDT({year:year,month:month,day:day,hour:hour,minute:minute,second:second,millisecond:millisecond},opts);
		};DateTime.utc=function utc(){
			var _lastOpts2=lastOpts(arguments),opts=_lastOpts2[0],args=_lastOpts2[1],year=args[0],month=args[1],day=args[2],hour=args[3],minute=args[4],second=args[5],millisecond=args[6];opts.zone=FixedOffsetZone.utcInstance;return quickDT({year:year,month:month,day:day,hour:hour,minute:minute,second:second,millisecond:millisecond},opts);
		};DateTime.fromJSDate=function fromJSDate(date,options){
			if(options===void 0){
				options={};
			}var ts=isDate(date)?date.valueOf():NaN;if(Number.isNaN(ts)){
				return DateTime.invalid('invalid input');
			}var zoneToUse=normalizeZone(options.zone,Settings.defaultZone);if(!zoneToUse.isValid){
				return DateTime.invalid(unsupportedZone(zoneToUse));
			}return new DateTime({ts:ts,zone:zoneToUse,loc:Locale.fromObject(options)});
		};DateTime.fromMillis=function fromMillis(milliseconds,options){
			if(options===void 0){
				options={};
			}if(!isNumber(milliseconds)){
				throw new InvalidArgumentError('fromMillis requires a numerical input, but received a '+typeof milliseconds+' with value '+milliseconds);
			}else if(milliseconds<-MAX_DATE||milliseconds>MAX_DATE){
				return DateTime.invalid('Timestamp out of range');
			}else{
				return new DateTime({ts:milliseconds,zone:normalizeZone(options.zone,Settings.defaultZone),loc:Locale.fromObject(options)});
			}
		};DateTime.fromSeconds=function fromSeconds(seconds,options){
			if(options===void 0){
				options={};
			}if(!isNumber(seconds)){
				throw new InvalidArgumentError('fromSeconds requires a numerical input');
			}else{
				return new DateTime({ts:seconds*1e3,zone:normalizeZone(options.zone,Settings.defaultZone),loc:Locale.fromObject(options)});
			}
		};DateTime.fromObject=function fromObject(obj,opts){
			if(opts===void 0){
				opts={};
			}obj=obj||{};var zoneToUse=normalizeZone(opts.zone,Settings.defaultZone);if(!zoneToUse.isValid){
				return DateTime.invalid(unsupportedZone(zoneToUse));
			}var tsNow=Settings.now(),offsetProvis=!isUndefined(opts.specificOffset)?opts.specificOffset:zoneToUse.offset(tsNow),normalized=normalizeObject(obj,normalizeUnit),containsOrdinal=!isUndefined(normalized.ordinal),containsGregorYear=!isUndefined(normalized.year),containsGregorMD=!isUndefined(normalized.month)||!isUndefined(normalized.day),containsGregor=containsGregorYear||containsGregorMD,definiteWeekDef=normalized.weekYear||normalized.weekNumber,loc=Locale.fromObject(opts);if((containsGregor||containsOrdinal)&&definiteWeekDef){
				throw new ConflictingSpecificationError('Can\'t mix weekYear/weekNumber units with year/month/day or ordinals');
			}if(containsGregorMD&&containsOrdinal){
				throw new ConflictingSpecificationError('Can\'t mix ordinal dates with month/day');
			}var useWeekData=definiteWeekDef||normalized.weekday&&!containsGregor;var units,defaultValues,objNow=tsToObj(tsNow,offsetProvis);if(useWeekData){
				units=orderedWeekUnits;defaultValues=defaultWeekUnitValues;objNow=gregorianToWeek(objNow);
			}else if(containsOrdinal){
				units=orderedOrdinalUnits;defaultValues=defaultOrdinalUnitValues;objNow=gregorianToOrdinal(objNow);
			}else{
				units=orderedUnits;defaultValues=defaultUnitValues;
			}var foundFirst=false;for(var _iterator3=_createForOfIteratorHelperLoose(units),_step3;!(_step3=_iterator3()).done;){
				var u=_step3.value;var v=normalized[u];if(!isUndefined(v)){
					foundFirst=true;
				}else if(foundFirst){
					normalized[u]=defaultValues[u];
				}else{
					normalized[u]=objNow[u];
				}
			}var higherOrderInvalid=useWeekData?hasInvalidWeekData(normalized):containsOrdinal?hasInvalidOrdinalData(normalized):hasInvalidGregorianData(normalized),invalid=higherOrderInvalid||hasInvalidTimeData(normalized);if(invalid){
				return DateTime.invalid(invalid);
			}var gregorian=useWeekData?weekToGregorian(normalized):containsOrdinal?ordinalToGregorian(normalized):normalized,_objToTS2=objToTS(gregorian,offsetProvis,zoneToUse),tsFinal=_objToTS2[0],offsetFinal=_objToTS2[1],inst=new DateTime({ts:tsFinal,zone:zoneToUse,o:offsetFinal,loc:loc});if(normalized.weekday&&containsGregor&&obj.weekday!==inst.weekday){
				return DateTime.invalid('mismatched weekday','you can\'t specify both a weekday of '+normalized.weekday+' and a date of '+inst.toISO());
			}return inst;
		};DateTime.fromISO=function fromISO(text,opts){
			if(opts===void 0){
				opts={};
			}var _parseISODate=parseISODate(text),vals=_parseISODate[0],parsedZone=_parseISODate[1];return parseDataToDateTime(vals,parsedZone,opts,'ISO 8601',text);
		};DateTime.fromRFC2822=function fromRFC2822(text,opts){
			if(opts===void 0){
				opts={};
			}var _parseRFC2822Date=parseRFC2822Date(text),vals=_parseRFC2822Date[0],parsedZone=_parseRFC2822Date[1];return parseDataToDateTime(vals,parsedZone,opts,'RFC 2822',text);
		};DateTime.fromHTTP=function fromHTTP(text,opts){
			if(opts===void 0){
				opts={};
			}var _parseHTTPDate=parseHTTPDate(text),vals=_parseHTTPDate[0],parsedZone=_parseHTTPDate[1];return parseDataToDateTime(vals,parsedZone,opts,'HTTP',opts);
		};DateTime.fromFormat=function fromFormat(text,fmt,opts){
			if(opts===void 0){
				opts={};
			}if(isUndefined(text)||isUndefined(fmt)){
				throw new InvalidArgumentError('fromFormat requires an input string and a format');
			}var _opts=opts,_opts$locale=_opts.locale,locale=_opts$locale===void 0?null:_opts$locale,_opts$numberingSystem=_opts.numberingSystem,numberingSystem=_opts$numberingSystem===void 0?null:_opts$numberingSystem,localeToUse=Locale.fromOpts({locale:locale,numberingSystem:numberingSystem,defaultToEN:true}),_parseFromTokens=parseFromTokens(localeToUse,text,fmt),vals=_parseFromTokens[0],parsedZone=_parseFromTokens[1],specificOffset=_parseFromTokens[2],invalid=_parseFromTokens[3];if(invalid){
				return DateTime.invalid(invalid);
			}else{
				return parseDataToDateTime(vals,parsedZone,opts,'format '+fmt,text,specificOffset);
			}
		};DateTime.fromString=function fromString(text,fmt,opts){
			if(opts===void 0){
				opts={};
			}return DateTime.fromFormat(text,fmt,opts);
		};DateTime.fromSQL=function fromSQL(text,opts){
			if(opts===void 0){
				opts={};
			}var _parseSQL=parseSQL(text),vals=_parseSQL[0],parsedZone=_parseSQL[1];return parseDataToDateTime(vals,parsedZone,opts,'SQL',text);
		};DateTime.invalid=function invalid(reason,explanation){
			if(explanation===void 0){
				explanation=null;
			}if(!reason){
				throw new InvalidArgumentError('need to specify a reason the DateTime is invalid');
			}var invalid=reason instanceof Invalid?reason:new Invalid(reason,explanation);if(Settings.throwOnInvalid){
				throw new InvalidDateTimeError(invalid);
			}else{
				return new DateTime({invalid:invalid});
			}
		};DateTime.isDateTime=function isDateTime(o){
			return o&&o.isLuxonDateTime||false;
		};var _proto=DateTime.prototype;_proto.get=function get(unit){
			return this[unit];
		};_proto.resolvedLocaleOptions=function resolvedLocaleOptions(opts){
			if(opts===void 0){
				opts={};
			}var _Formatter$create$res=Formatter.create(this.loc.clone(opts),opts).resolvedOptions(this),locale=_Formatter$create$res.locale,numberingSystem=_Formatter$create$res.numberingSystem,calendar=_Formatter$create$res.calendar;return{locale:locale,numberingSystem:numberingSystem,outputCalendar:calendar};
		};_proto.toUTC=function toUTC(offset,opts){
			if(offset===void 0){
				offset=0;
			}if(opts===void 0){
				opts={};
			}return this.setZone(FixedOffsetZone.instance(offset),opts);
		};_proto.toLocal=function toLocal(){
			return this.setZone(Settings.defaultZone);
		};_proto.setZone=function setZone(zone,_temp){
			var _ref3=_temp===void 0?{}:_temp,_ref3$keepLocalTime=_ref3.keepLocalTime,keepLocalTime=_ref3$keepLocalTime===void 0?false:_ref3$keepLocalTime,_ref3$keepCalendarTim=_ref3.keepCalendarTime,keepCalendarTime=_ref3$keepCalendarTim===void 0?false:_ref3$keepCalendarTim;zone=normalizeZone(zone,Settings.defaultZone);if(zone.equals(this.zone)){
				return this;
			}else if(!zone.isValid){
				return DateTime.invalid(unsupportedZone(zone));
			}else{
				var newTS=this.ts;if(keepLocalTime||keepCalendarTime){
					var offsetGuess=zone.offset(this.ts);var asObj=this.toObject();var _objToTS3=objToTS(asObj,offsetGuess,zone);newTS=_objToTS3[0];
				}return clone(this,{ts:newTS,zone:zone});
			}
		};_proto.reconfigure=function reconfigure(_temp2){
			var _ref4=_temp2===void 0?{}:_temp2,locale=_ref4.locale,numberingSystem=_ref4.numberingSystem,outputCalendar=_ref4.outputCalendar;var loc=this.loc.clone({locale:locale,numberingSystem:numberingSystem,outputCalendar:outputCalendar});return clone(this,{loc:loc});
		};_proto.setLocale=function setLocale(locale){
			return this.reconfigure({locale:locale});
		};_proto.set=function set(values){
			if(!this.isValid)return this;var normalized=normalizeObject(values,normalizeUnit),settingWeekStuff=!isUndefined(normalized.weekYear)||!isUndefined(normalized.weekNumber)||!isUndefined(normalized.weekday),containsOrdinal=!isUndefined(normalized.ordinal),containsGregorYear=!isUndefined(normalized.year),containsGregorMD=!isUndefined(normalized.month)||!isUndefined(normalized.day),containsGregor=containsGregorYear||containsGregorMD,definiteWeekDef=normalized.weekYear||normalized.weekNumber;if((containsGregor||containsOrdinal)&&definiteWeekDef){
				throw new ConflictingSpecificationError('Can\'t mix weekYear/weekNumber units with year/month/day or ordinals');
			}if(containsGregorMD&&containsOrdinal){
				throw new ConflictingSpecificationError('Can\'t mix ordinal dates with month/day');
			}var mixed;if(settingWeekStuff){
				mixed=weekToGregorian(_extends({},gregorianToWeek(this.c),normalized));
			}else if(!isUndefined(normalized.ordinal)){
				mixed=ordinalToGregorian(_extends({},gregorianToOrdinal(this.c),normalized));
			}else{
				mixed=_extends({},this.toObject(),normalized);if(isUndefined(normalized.day)){
					mixed.day=Math.min(daysInMonth(mixed.year,mixed.month),mixed.day);
				}
			}var _objToTS4=objToTS(mixed,this.o,this.zone),ts=_objToTS4[0],o=_objToTS4[1];return clone(this,{ts:ts,o:o});
		};_proto.plus=function plus(duration){
			if(!this.isValid)return this;var dur=Duration.fromDurationLike(duration);return clone(this,adjustTime(this,dur));
		};_proto.minus=function minus(duration){
			if(!this.isValid)return this;var dur=Duration.fromDurationLike(duration).negate();return clone(this,adjustTime(this,dur));
		};_proto.startOf=function startOf(unit){
			if(!this.isValid)return this;var o={},normalizedUnit=Duration.normalizeUnit(unit);switch(normalizedUnit){
			case'years':o.month=1;case'quarters':case'months':o.day=1;case'weeks':case'days':o.hour=0;case'hours':o.minute=0;case'minutes':o.second=0;case'seconds':o.millisecond=0;break;
			}if(normalizedUnit==='weeks'){
				o.weekday=1;
			}if(normalizedUnit==='quarters'){
				var q=Math.ceil(this.month/3);o.month=(q-1)*3+1;
			}return this.set(o);
		};_proto.endOf=function endOf(unit){
			var _this$plus;return this.isValid?this.plus((_this$plus={},_this$plus[unit]=1,_this$plus)).startOf(unit).minus(1):this;
		};_proto.toFormat=function toFormat(fmt,opts){
			if(opts===void 0){
				opts={};
			}return this.isValid?Formatter.create(this.loc.redefaultToEN(opts)).formatDateTimeFromString(this,fmt):INVALID;
		};_proto.toLocaleString=function toLocaleString(formatOpts,opts){
			if(formatOpts===void 0){
				formatOpts=DATE_SHORT;
			}if(opts===void 0){
				opts={};
			}return this.isValid?Formatter.create(this.loc.clone(opts),formatOpts).formatDateTime(this):INVALID;
		};_proto.toLocaleParts=function toLocaleParts(opts){
			if(opts===void 0){
				opts={};
			}return this.isValid?Formatter.create(this.loc.clone(opts),opts).formatDateTimeParts(this):[];
		};_proto.toISO=function toISO(opts){
			if(opts===void 0){
				opts={};
			}if(!this.isValid){
				return null;
			}return this.toISODate(opts)+'T'+this.toISOTime(opts);
		};_proto.toISODate=function toISODate(_temp3){
			var _ref5=_temp3===void 0?{}:_temp3,_ref5$format=_ref5.format,format=_ref5$format===void 0?'extended':_ref5$format;var fmt=format==='basic'?'yyyyMMdd':'yyyy-MM-dd';if(this.year>9999){
				fmt='+'+fmt;
			}return toTechFormat(this,fmt);
		};_proto.toISOWeekDate=function toISOWeekDate(){
			return toTechFormat(this,'kkkk-\'W\'WW-c');
		};_proto.toISOTime=function toISOTime(_temp4){
			var _ref6=_temp4===void 0?{}:_temp4,_ref6$suppressMillise=_ref6.suppressMilliseconds,suppressMilliseconds=_ref6$suppressMillise===void 0?false:_ref6$suppressMillise,_ref6$suppressSeconds=_ref6.suppressSeconds,suppressSeconds=_ref6$suppressSeconds===void 0?false:_ref6$suppressSeconds,_ref6$includeOffset=_ref6.includeOffset,includeOffset=_ref6$includeOffset===void 0?true:_ref6$includeOffset,_ref6$includePrefix=_ref6.includePrefix,includePrefix=_ref6$includePrefix===void 0?false:_ref6$includePrefix,_ref6$format=_ref6.format,format=_ref6$format===void 0?'extended':_ref6$format;return toTechTimeFormat(this,{suppressSeconds:suppressSeconds,suppressMilliseconds:suppressMilliseconds,includeOffset:includeOffset,includePrefix:includePrefix,format:format});
		};_proto.toRFC2822=function toRFC2822(){
			return toTechFormat(this,'EEE, dd LLL yyyy HH:mm:ss ZZZ',false);
		};_proto.toHTTP=function toHTTP(){
			return toTechFormat(this.toUTC(),'EEE, dd LLL yyyy HH:mm:ss \'GMT\'');
		};_proto.toSQLDate=function toSQLDate(){
			return toTechFormat(this,'yyyy-MM-dd');
		};_proto.toSQLTime=function toSQLTime(_temp5){
			var _ref7=_temp5===void 0?{}:_temp5,_ref7$includeOffset=_ref7.includeOffset,includeOffset=_ref7$includeOffset===void 0?true:_ref7$includeOffset,_ref7$includeZone=_ref7.includeZone,includeZone=_ref7$includeZone===void 0?false:_ref7$includeZone;return toTechTimeFormat(this,{includeOffset:includeOffset,includeZone:includeZone,spaceZone:true});
		};_proto.toSQL=function toSQL(opts){
			if(opts===void 0){
				opts={};
			}if(!this.isValid){
				return null;
			}return this.toSQLDate()+' '+this.toSQLTime(opts);
		};_proto.toString=function toString(){
			return this.isValid?this.toISO():INVALID;
		};_proto.valueOf=function valueOf(){
			return this.toMillis();
		};_proto.toMillis=function toMillis(){
			return this.isValid?this.ts:NaN;
		};_proto.toSeconds=function toSeconds(){
			return this.isValid?this.ts/1e3:NaN;
		};_proto.toJSON=function toJSON(){
			return this.toISO();
		};_proto.toBSON=function toBSON(){
			return this.toJSDate();
		};_proto.toObject=function toObject(opts){
			if(opts===void 0){
				opts={};
			}if(!this.isValid)return{};var base=_extends({},this.c);if(opts.includeConfig){
				base.outputCalendar=this.outputCalendar;base.numberingSystem=this.loc.numberingSystem;base.locale=this.loc.locale;
			}return base;
		};_proto.toJSDate=function toJSDate(){
			return new Date(this.isValid?this.ts:NaN);
		};_proto.diff=function diff(otherDateTime,unit,opts){
			if(unit===void 0){
				unit='milliseconds';
			}if(opts===void 0){
				opts={};
			}if(!this.isValid||!otherDateTime.isValid){
				return Duration.invalid('created by diffing an invalid DateTime');
			}var durOpts=_extends({locale:this.locale,numberingSystem:this.numberingSystem},opts);var units=maybeArray(unit).map(Duration.normalizeUnit),otherIsLater=otherDateTime.valueOf()>this.valueOf(),earlier=otherIsLater?this:otherDateTime,later=otherIsLater?otherDateTime:this,diffed=_diff(earlier,later,units,durOpts);return otherIsLater?diffed.negate():diffed;
		};_proto.diffNow=function diffNow(unit,opts){
			if(unit===void 0){
				unit='milliseconds';
			}if(opts===void 0){
				opts={};
			}return this.diff(DateTime.now(),unit,opts);
		};_proto.until=function until(otherDateTime){
			return this.isValid?Interval.fromDateTimes(this,otherDateTime):this;
		};_proto.hasSame=function hasSame(otherDateTime,unit){
			if(!this.isValid)return false;var inputMs=otherDateTime.valueOf();var otherZoneDateTime=this.setZone(otherDateTime.zone,{keepLocalTime:true});return otherZoneDateTime.startOf(unit)<=inputMs&&inputMs<=otherZoneDateTime.endOf(unit);
		};_proto.equals=function equals(other){
			return this.isValid&&other.isValid&&this.valueOf()===other.valueOf()&&this.zone.equals(other.zone)&&this.loc.equals(other.loc);
		};_proto.toRelative=function toRelative(options){
			if(options===void 0){
				options={};
			}if(!this.isValid)return null;var base=options.base||DateTime.fromObject({},{zone:this.zone}),padding=options.padding?this<base?-options.padding:options.padding:0;var units=['years','months','days','hours','minutes','seconds'];var unit=options.unit;if(Array.isArray(options.unit)){
				units=options.unit;unit=undefined;
			}return diffRelative(base,this.plus(padding),_extends({},options,{numeric:'always',units:units,unit:unit}));
		};_proto.toRelativeCalendar=function toRelativeCalendar(options){
			if(options===void 0){
				options={};
			}if(!this.isValid)return null;return diffRelative(options.base||DateTime.fromObject({},{zone:this.zone}),this,_extends({},options,{numeric:'auto',units:['years','months','days'],calendary:true}));
		};DateTime.min=function min(){
			for(var _len=arguments.length,dateTimes=new Array(_len),_key=0;_key<_len;_key++){
				dateTimes[_key]=arguments[_key];
			}if(!dateTimes.every(DateTime.isDateTime)){
				throw new InvalidArgumentError('min requires all arguments be DateTimes');
			}return bestBy(dateTimes,function(i){
				return i.valueOf();
			},Math.min);
		};DateTime.max=function max(){
			for(var _len2=arguments.length,dateTimes=new Array(_len2),_key2=0;_key2<_len2;_key2++){
				dateTimes[_key2]=arguments[_key2];
			}if(!dateTimes.every(DateTime.isDateTime)){
				throw new InvalidArgumentError('max requires all arguments be DateTimes');
			}return bestBy(dateTimes,function(i){
				return i.valueOf();
			},Math.max);
		};DateTime.fromFormatExplain=function fromFormatExplain(text,fmt,options){
			if(options===void 0){
				options={};
			}var _options=options,_options$locale=_options.locale,locale=_options$locale===void 0?null:_options$locale,_options$numberingSys=_options.numberingSystem,numberingSystem=_options$numberingSys===void 0?null:_options$numberingSys,localeToUse=Locale.fromOpts({locale:locale,numberingSystem:numberingSystem,defaultToEN:true});return explainFromTokens(localeToUse,text,fmt);
		};DateTime.fromStringExplain=function fromStringExplain(text,fmt,options){
			if(options===void 0){
				options={};
			}return DateTime.fromFormatExplain(text,fmt,options);
		};_createClass(DateTime,[{key:'isValid',get:function get(){
			return this.invalid===null;
		}},{key:'invalidReason',get:function get(){
			return this.invalid?this.invalid.reason:null;
		}},{key:'invalidExplanation',get:function get(){
			return this.invalid?this.invalid.explanation:null;
		}},{key:'locale',get:function get(){
			return this.isValid?this.loc.locale:null;
		}},{key:'numberingSystem',get:function get(){
			return this.isValid?this.loc.numberingSystem:null;
		}},{key:'outputCalendar',get:function get(){
			return this.isValid?this.loc.outputCalendar:null;
		}},{key:'zone',get:function get(){
			return this._zone;
		}},{key:'zoneName',get:function get(){
			return this.isValid?this.zone.name:null;
		}},{key:'year',get:function get(){
			return this.isValid?this.c.year:NaN;
		}},{key:'quarter',get:function get(){
			return this.isValid?Math.ceil(this.c.month/3):NaN;
		}},{key:'month',get:function get(){
			return this.isValid?this.c.month:NaN;
		}},{key:'day',get:function get(){
			return this.isValid?this.c.day:NaN;
		}},{key:'hour',get:function get(){
			return this.isValid?this.c.hour:NaN;
		}},{key:'minute',get:function get(){
			return this.isValid?this.c.minute:NaN;
		}},{key:'second',get:function get(){
			return this.isValid?this.c.second:NaN;
		}},{key:'millisecond',get:function get(){
			return this.isValid?this.c.millisecond:NaN;
		}},{key:'weekYear',get:function get(){
			return this.isValid?possiblyCachedWeekData(this).weekYear:NaN;
		}},{key:'weekNumber',get:function get(){
			return this.isValid?possiblyCachedWeekData(this).weekNumber:NaN;
		}},{key:'weekday',get:function get(){
			return this.isValid?possiblyCachedWeekData(this).weekday:NaN;
		}},{key:'ordinal',get:function get(){
			return this.isValid?gregorianToOrdinal(this.c).ordinal:NaN;
		}},{key:'monthShort',get:function get(){
			return this.isValid?Info.months('short',{locObj:this.loc})[this.month-1]:null;
		}},{key:'monthLong',get:function get(){
			return this.isValid?Info.months('long',{locObj:this.loc})[this.month-1]:null;
		}},{key:'weekdayShort',get:function get(){
			return this.isValid?Info.weekdays('short',{locObj:this.loc})[this.weekday-1]:null;
		}},{key:'weekdayLong',get:function get(){
			return this.isValid?Info.weekdays('long',{locObj:this.loc})[this.weekday-1]:null;
		}},{key:'offset',get:function get(){
			return this.isValid?+this.o:NaN;
		}},{key:'offsetNameShort',get:function get(){
			if(this.isValid){
				return this.zone.offsetName(this.ts,{format:'short',locale:this.locale});
			}else{
				return null;
			}
		}},{key:'offsetNameLong',get:function get(){
			if(this.isValid){
				return this.zone.offsetName(this.ts,{format:'long',locale:this.locale});
			}else{
				return null;
			}
		}},{key:'isOffsetFixed',get:function get(){
			return this.isValid?this.zone.isUniversal:null;
		}},{key:'isInDST',get:function get(){
			if(this.isOffsetFixed){
				return false;
			}else{
				return this.offset>this.set({month:1}).offset||this.offset>this.set({month:5}).offset;
			}
		}},{key:'isInLeapYear',get:function get(){
			return isLeapYear(this.year);
		}},{key:'daysInMonth',get:function get(){
			return daysInMonth(this.year,this.month);
		}},{key:'daysInYear',get:function get(){
			return this.isValid?daysInYear(this.year):NaN;
		}},{key:'weeksInWeekYear',get:function get(){
			return this.isValid?weeksInWeekYear(this.weekYear):NaN;
		}}],[{key:'DATE_SHORT',get:function get(){
			return DATE_SHORT;
		}},{key:'DATE_MED',get:function get(){
			return DATE_MED;
		}},{key:'DATE_MED_WITH_WEEKDAY',get:function get(){
			return DATE_MED_WITH_WEEKDAY;
		}},{key:'DATE_FULL',get:function get(){
			return DATE_FULL;
		}},{key:'DATE_HUGE',get:function get(){
			return DATE_HUGE;
		}},{key:'TIME_SIMPLE',get:function get(){
			return TIME_SIMPLE;
		}},{key:'TIME_WITH_SECONDS',get:function get(){
			return TIME_WITH_SECONDS;
		}},{key:'TIME_WITH_SHORT_OFFSET',get:function get(){
			return TIME_WITH_SHORT_OFFSET;
		}},{key:'TIME_WITH_LONG_OFFSET',get:function get(){
			return TIME_WITH_LONG_OFFSET;
		}},{key:'TIME_24_SIMPLE',get:function get(){
			return TIME_24_SIMPLE;
		}},{key:'TIME_24_WITH_SECONDS',get:function get(){
			return TIME_24_WITH_SECONDS;
		}},{key:'TIME_24_WITH_SHORT_OFFSET',get:function get(){
			return TIME_24_WITH_SHORT_OFFSET;
		}},{key:'TIME_24_WITH_LONG_OFFSET',get:function get(){
			return TIME_24_WITH_LONG_OFFSET;
		}},{key:'DATETIME_SHORT',get:function get(){
			return DATETIME_SHORT;
		}},{key:'DATETIME_SHORT_WITH_SECONDS',get:function get(){
			return DATETIME_SHORT_WITH_SECONDS;
		}},{key:'DATETIME_MED',get:function get(){
			return DATETIME_MED;
		}},{key:'DATETIME_MED_WITH_SECONDS',get:function get(){
			return DATETIME_MED_WITH_SECONDS;
		}},{key:'DATETIME_MED_WITH_WEEKDAY',get:function get(){
			return DATETIME_MED_WITH_WEEKDAY;
		}},{key:'DATETIME_FULL',get:function get(){
			return DATETIME_FULL;
		}},{key:'DATETIME_FULL_WITH_SECONDS',get:function get(){
			return DATETIME_FULL_WITH_SECONDS;
		}},{key:'DATETIME_HUGE',get:function get(){
			return DATETIME_HUGE;
		}},{key:'DATETIME_HUGE_WITH_SECONDS',get:function get(){
			return DATETIME_HUGE_WITH_SECONDS;
		}}]);return DateTime;
	}();function friendlyDateTime(dateTimeish){
		if(DateTime.isDateTime(dateTimeish)){
			return dateTimeish;
		}else if(dateTimeish&&dateTimeish.valueOf&&isNumber(dateTimeish.valueOf())){
			return DateTime.fromJSDate(dateTimeish);
		}else if(dateTimeish&&typeof dateTimeish==='object'){
			return DateTime.fromObject(dateTimeish);
		}else{
			throw new InvalidArgumentError('Unknown datetime argument: '+dateTimeish+', of type '+typeof dateTimeish);
		}
	}var VERSION='2.2.0';exports.DateTime=DateTime;exports.Duration=Duration;exports.FixedOffsetZone=FixedOffsetZone;exports.IANAZone=IANAZone;exports.Info=Info;exports.Interval=Interval;exports.InvalidZone=InvalidZone;exports.Settings=Settings;exports.SystemZone=SystemZone;exports.VERSION=VERSION;exports.Zone=Zone;
},{}],3:[function(require,module,exports){
	window.$=require('jquery');window.luxon=require('luxon');
},{jquery:1,luxon:2}]},{},[3]);
