function ce({base:e="",routes:t=[]}={}){return{__proto__:new Proxy({},{get:(r,n,o)=>(i,...a)=>t.push([n.toUpperCase(),RegExp(`^${(e+i).replace(/(\/?)\*/g,"($1.*)?").replace(/(\/$)|((?<=\/)\/)/,"").replace(/:(\w+)(\?)?(\.)?/g,"$2(?<$1>[^/]+)$2$3").replace(/\.(?=[\w(])/,"\\.").replace(/\)\.\?\(([^\[]+)\[\^/g,"?)\\.?($1(?<=\\.)[^\\.")}/*$`),a])&&o}),routes:t,async handle(r,...n){let o,i,a=new URL(r.url);r.query=Object.fromEntries(a.searchParams);for(var[s,c,u]of t)if((s===r.method||s==="ALL")&&(i=a.pathname.match(c))){r.params=i.groups;for(var l of u)if((o=await l(r.proxy||r,...n))!==void 0)return o}}}}var f=crypto,g=e=>e instanceof CryptoKey;var w=new TextEncoder,y=new TextDecoder,gt=2**32;function C(...e){let t=e.reduce((o,{length:i})=>o+i,0),r=new Uint8Array(t),n=0;return e.forEach(o=>{r.set(o,n),n+=o.length}),r}var de=e=>{let t=atob(e),r=new Uint8Array(t.length);for(let n=0;n<t.length;n++)r[n]=t.charCodeAt(n);return r},A=e=>{let t=e;t instanceof Uint8Array&&(t=y.decode(t)),t=t.replace(/-/g,"+").replace(/_/g,"/").replace(/\s/g,"");try{return de(t)}catch{throw new TypeError("The input to be decoded is not correctly encoded.")}};var b=class extends Error{constructor(t){var r;super(t),this.code="ERR_JOSE_GENERIC",this.name=this.constructor.name,(r=Error.captureStackTrace)===null||r===void 0||r.call(Error,this,this.constructor)}static get code(){return"ERR_JOSE_GENERIC"}},E=class extends b{constructor(t,r="unspecified",n="unspecified"){super(t),this.code="ERR_JWT_CLAIM_VALIDATION_FAILED",this.claim=r,this.reason=n}static get code(){return"ERR_JWT_CLAIM_VALIDATION_FAILED"}},I=class extends b{constructor(t,r="unspecified",n="unspecified"){super(t),this.code="ERR_JWT_EXPIRED",this.claim=r,this.reason=n}static get code(){return"ERR_JWT_EXPIRED"}},T=class extends b{constructor(){super(...arguments),this.code="ERR_JOSE_ALG_NOT_ALLOWED"}static get code(){return"ERR_JOSE_ALG_NOT_ALLOWED"}},d=class extends b{constructor(){super(...arguments),this.code="ERR_JOSE_NOT_SUPPORTED"}static get code(){return"ERR_JOSE_NOT_SUPPORTED"}};var p=class extends b{constructor(){super(...arguments),this.code="ERR_JWS_INVALID"}static get code(){return"ERR_JWS_INVALID"}},_=class extends b{constructor(){super(...arguments),this.code="ERR_JWT_INVALID"}static get code(){return"ERR_JWT_INVALID"}};var D=class extends b{constructor(){super(...arguments),this.code="ERR_JWS_SIGNATURE_VERIFICATION_FAILED",this.message="signature verification failed"}static get code(){return"ERR_JWS_SIGNATURE_VERIFICATION_FAILED"}};var $=f.getRandomValues.bind(f);function K(){return typeof WebSocketPair<"u"||typeof navigator<"u"&&navigator.userAgent==="Cloudflare-Workers"||typeof EdgeRuntime<"u"&&EdgeRuntime==="vercel"}function v(e,t="algorithm.name"){return new TypeError(`CryptoKey does not support this operation, its ${t} must be ${e}`)}function O(e,t){return e.name===t}function Y(e){return parseInt(e.name.slice(4),10)}function Ke(e){switch(e){case"ES256":return"P-256";case"ES384":return"P-384";case"ES512":return"P-521";default:throw new Error("unreachable")}}function xe(e,t){if(t.length&&!t.some(r=>e.usages.includes(r))){let r="CryptoKey does not support this operation, its usages must include ";if(t.length>2){let n=t.pop();r+=`one of ${t.join(", ")}, or ${n}.`}else t.length===2?r+=`one of ${t[0]} or ${t[1]}.`:r+=`${t[0]}.`;throw new TypeError(r)}}function ue(e,t,...r){switch(t){case"HS256":case"HS384":case"HS512":{if(!O(e.algorithm,"HMAC"))throw v("HMAC");let n=parseInt(t.slice(2),10);if(Y(e.algorithm.hash)!==n)throw v(`SHA-${n}`,"algorithm.hash");break}case"RS256":case"RS384":case"RS512":{if(!O(e.algorithm,"RSASSA-PKCS1-v1_5"))throw v("RSASSA-PKCS1-v1_5");let n=parseInt(t.slice(2),10);if(Y(e.algorithm.hash)!==n)throw v(`SHA-${n}`,"algorithm.hash");break}case"PS256":case"PS384":case"PS512":{if(!O(e.algorithm,"RSA-PSS"))throw v("RSA-PSS");let n=parseInt(t.slice(2),10);if(Y(e.algorithm.hash)!==n)throw v(`SHA-${n}`,"algorithm.hash");break}case(K()&&"EdDSA"):{if(!O(e.algorithm,"NODE-ED25519"))throw v("NODE-ED25519");break}case"EdDSA":{if(e.algorithm.name!=="Ed25519"&&e.algorithm.name!=="Ed448")throw v("Ed25519 or Ed448");break}case"ES256":case"ES384":case"ES512":{if(!O(e.algorithm,"ECDSA"))throw v("ECDSA");let n=Ke(t);if(e.algorithm.namedCurve!==n)throw v(n,"algorithm.namedCurve");break}default:throw new TypeError("CryptoKey does not support this operation")}xe(e,r)}function fe(e,t,...r){if(r.length>2){let n=r.pop();e+=`one of type ${r.join(", ")}, or ${n}.`}else r.length===2?e+=`one of type ${r[0]} or ${r[1]}.`:e+=`of type ${r[0]}.`;return t==null?e+=` Received ${t}`:typeof t=="function"&&t.name?e+=` Received function ${t.name}`:typeof t=="object"&&t!=null&&t.constructor&&t.constructor.name&&(e+=` Received an instance of ${t.constructor.name}`),e}var S=(e,...t)=>fe("Key must be ",e,...t);function Q(e,t,...r){return fe(`Key for the ${e} algorithm must be `,t,...r)}var Z=e=>g(e),m=["CryptoKey"];var Je=(...e)=>{let t=e.filter(Boolean);if(t.length===0||t.length===1)return!0;let r;for(let n of t){let o=Object.keys(n);if(!r||r.size===0){r=new Set(o);continue}for(let i of o){if(r.has(i))return!1;r.add(i)}}return!0},W=Je;function Re(e){return typeof e=="object"&&e!==null}function h(e){if(!Re(e)||Object.prototype.toString.call(e)!=="[object Object]")return!1;if(Object.getPrototypeOf(e)===null)return!0;let t=e;for(;Object.getPrototypeOf(t)!==null;)t=Object.getPrototypeOf(t);return Object.getPrototypeOf(e)===t}var B=(e,t)=>{if(e.startsWith("RS")||e.startsWith("PS")){let{modulusLength:r}=t.algorithm;if(typeof r!="number"||r<2048)throw new TypeError(`${e} requires key modulusLength to be 2048 bits or larger`)}};var P=(e,t,r=0)=>{r===0&&(t.unshift(t.length),t.unshift(6));let n=e.indexOf(t[0],r);if(n===-1)return!1;let o=e.subarray(n,n+t.length);return o.length!==t.length?!1:o.every((i,a)=>i===t[a])||P(e,t,n+1)},j=e=>{switch(!0){case P(e,[42,134,72,206,61,3,1,7]):return"P-256";case P(e,[43,129,4,0,34]):return"P-384";case P(e,[43,129,4,0,35]):return"P-521";case P(e,[43,101,110]):return"X25519";case P(e,[43,101,111]):return"X448";case P(e,[43,101,112]):return"Ed25519";case P(e,[43,101,113]):return"Ed448";default:throw new d("Invalid or unsupported EC Key Curve or OKP Key Sub Type")}},ke=async(e,t,r,n,o)=>{var i;let a,s,c=new Uint8Array(atob(r.replace(e,"")).split("").map(l=>l.charCodeAt(0))),u=t==="spki";switch(n){case"PS256":case"PS384":case"PS512":a={name:"RSA-PSS",hash:`SHA-${n.slice(-3)}`},s=u?["verify"]:["sign"];break;case"RS256":case"RS384":case"RS512":a={name:"RSASSA-PKCS1-v1_5",hash:`SHA-${n.slice(-3)}`},s=u?["verify"]:["sign"];break;case"RSA-OAEP":case"RSA-OAEP-256":case"RSA-OAEP-384":case"RSA-OAEP-512":a={name:"RSA-OAEP",hash:`SHA-${parseInt(n.slice(-3),10)||1}`},s=u?["encrypt","wrapKey"]:["decrypt","unwrapKey"];break;case"ES256":a={name:"ECDSA",namedCurve:"P-256"},s=u?["verify"]:["sign"];break;case"ES384":a={name:"ECDSA",namedCurve:"P-384"},s=u?["verify"]:["sign"];break;case"ES512":a={name:"ECDSA",namedCurve:"P-521"},s=u?["verify"]:["sign"];break;case"ECDH-ES":case"ECDH-ES+A128KW":case"ECDH-ES+A192KW":case"ECDH-ES+A256KW":{let l=j(c);a=l.startsWith("P-")?{name:"ECDH",namedCurve:l}:{name:l},s=u?[]:["deriveBits"];break}case(K()&&"EdDSA"):{let l=j(c).toUpperCase();a={name:`NODE-${l}`,namedCurve:`NODE-${l}`},s=u?["verify"]:["sign"];break}case"EdDSA":a={name:j(c)},s=u?["verify"]:["sign"];break;default:throw new d('Invalid or unsupported "alg" (Algorithm) value')}return f.subtle.importKey(t,c,a,(i=o?.extractable)!==null&&i!==void 0?i:!1,s)};var le=(e,t,r)=>ke(/(?:-----(?:BEGIN|END) PUBLIC KEY-----|\s)/g,"spki",e,t,r);async function ee(e,t,r){if(typeof e!="string"||e.indexOf("-----BEGIN PUBLIC KEY-----")!==0)throw new TypeError('"spki" must be SPKI formatted string');return le(e,t,r)}var Me=(e,t)=>{if(!(t instanceof Uint8Array)){if(!Z(t))throw new TypeError(Q(e,t,...m,"Uint8Array"));if(t.type!=="secret")throw new TypeError(`${m.join(" or ")} instances for symmetric algorithms must be of type "secret"`)}},Ne=(e,t,r)=>{if(!Z(t))throw new TypeError(Q(e,t,...m));if(t.type==="secret")throw new TypeError(`${m.join(" or ")} instances for asymmetric algorithms must not be of type "secret"`);if(r==="sign"&&t.type==="public")throw new TypeError(`${m.join(" or ")} instances for asymmetric algorithm signing must be of type "private"`);if(r==="decrypt"&&t.type==="public")throw new TypeError(`${m.join(" or ")} instances for asymmetric algorithm decryption must be of type "private"`);if(t.algorithm&&r==="verify"&&t.type==="private")throw new TypeError(`${m.join(" or ")} instances for asymmetric algorithm verifying must be of type "public"`);if(t.algorithm&&r==="encrypt"&&t.type==="private")throw new TypeError(`${m.join(" or ")} instances for asymmetric algorithm encryption must be of type "public"`)},$e=(e,t,r)=>{e.startsWith("HS")||e==="dir"||e.startsWith("PBES2")||/^A\d{3}(?:GCM)?KW$/.test(e)?Me(e,t):Ne(e,t,r)},k=$e;function qe(e,t,r,n,o){if(o.crit!==void 0&&n.crit===void 0)throw new e('"crit" (Critical) Header Parameter MUST be integrity protected');if(!n||n.crit===void 0)return new Set;if(!Array.isArray(n.crit)||n.crit.length===0||n.crit.some(a=>typeof a!="string"||a.length===0))throw new e('"crit" (Critical) Header Parameter MUST be an array of non-empty strings when present');let i;r!==void 0?i=new Map([...Object.entries(r),...t.entries()]):i=t;for(let a of n.crit){if(!i.has(a))throw new d(`Extension Header Parameter "${a}" is not recognized`);if(o[a]===void 0)throw new e(`Extension Header Parameter "${a}" is missing`);if(i.get(a)&&n[a]===void 0)throw new e(`Extension Header Parameter "${a}" MUST be integrity protected`)}return new Set(n.crit)}var J=qe;var Xe=(e,t)=>{if(t!==void 0&&(!Array.isArray(t)||t.some(r=>typeof r!="string")))throw new TypeError(`"${e}" option must be an array of strings`);if(!!t)return new Set(t)},re=Xe;var Ze=Symbol();function L(e,t){let r=`SHA-${e.slice(-3)}`;switch(e){case"HS256":case"HS384":case"HS512":return{hash:r,name:"HMAC"};case"PS256":case"PS384":case"PS512":return{hash:r,name:"RSA-PSS",saltLength:e.slice(-3)>>3};case"RS256":case"RS384":case"RS512":return{hash:r,name:"RSASSA-PKCS1-v1_5"};case"ES256":case"ES384":case"ES512":return{hash:r,name:"ECDSA",namedCurve:t.namedCurve};case(K()&&"EdDSA"):let{namedCurve:n}=t;return{name:n,namedCurve:n};case"EdDSA":return{name:t.name};default:throw new d(`alg ${e} is not supported either by JOSE or your javascript runtime`)}}function G(e,t,r){if(g(t))return ue(t,e,r),t;if(t instanceof Uint8Array){if(!e.startsWith("HS"))throw new TypeError(S(t,...m));return f.subtle.importKey("raw",t,{hash:`SHA-${e.slice(-3)}`,name:"HMAC"},!1,[r])}throw new TypeError(S(t,...m,"Uint8Array"))}var je=async(e,t,r,n)=>{let o=await G(e,t,"verify");B(e,o);let i=L(e,o.algorithm);try{return await f.subtle.verify(i,o,r,n)}catch{return!1}},Ee=je;async function V(e,t,r){var n;if(!h(e))throw new p("Flattened JWS must be an object");if(e.protected===void 0&&e.header===void 0)throw new p('Flattened JWS must have either of the "protected" or "header" members');if(e.protected!==void 0&&typeof e.protected!="string")throw new p("JWS Protected Header incorrect type");if(e.payload===void 0)throw new p("JWS Payload missing");if(typeof e.signature!="string")throw new p("JWS Signature missing or incorrect type");if(e.header!==void 0&&!h(e.header))throw new p("JWS Unprotected Header incorrect type");let o={};if(e.protected)try{let se=A(e.protected);o=JSON.parse(y.decode(se))}catch{throw new p("JWS Protected Header is invalid")}if(!W(o,e.header))throw new p("JWS Protected and JWS Unprotected Header Parameter names must be disjoint");let i={...o,...e.header},a=J(p,new Map([["b64",!0]]),r?.crit,o,i),s=!0;if(a.has("b64")&&(s=o.b64,typeof s!="boolean"))throw new p('The "b64" (base64url-encode payload) Header Parameter must be a boolean');let{alg:c}=i;if(typeof c!="string"||!c)throw new p('JWS "alg" (Algorithm) Header Parameter missing or invalid');let u=r&&re("algorithms",r.algorithms);if(u&&!u.has(c))throw new T('"alg" (Algorithm) Header Parameter not allowed');if(s){if(typeof e.payload!="string")throw new p("JWS Payload must be a string")}else if(typeof e.payload!="string"&&!(e.payload instanceof Uint8Array))throw new p("JWS Payload must be a string or an Uint8Array instance");let l=!1;typeof t=="function"&&(t=await t(o,e),l=!0),k(c,t,"verify");let R=C(w.encode((n=e.protected)!==null&&n!==void 0?n:""),w.encode("."),typeof e.payload=="string"?w.encode(e.payload):e.payload),X=A(e.signature);if(!await Ee(c,t,X,R))throw new D;let M;s?M=A(e.payload):typeof e.payload=="string"?M=w.encode(e.payload):M=e.payload;let N={payload:M};return e.protected!==void 0&&(N.protectedHeader=o),e.header!==void 0&&(N.unprotectedHeader=e.header),l?{...N,key:t}:N}async function ne(e,t,r){if(e instanceof Uint8Array&&(e=y.decode(e)),typeof e!="string")throw new p("Compact JWS must be a string or Uint8Array");let{0:n,1:o,2:i,length:a}=e.split(".");if(a!==3)throw new p("Invalid Compact JWS");let s=await V({payload:o,protected:n,signature:i},t,r),c={payload:s.payload,protectedHeader:s.protectedHeader};return typeof t=="function"?{...c,key:s.key}:c}var oe=e=>Math.floor(e.getTime()/1e3);var et=/^(\d+|\d+\.\d+) ?(seconds?|secs?|s|minutes?|mins?|m|hours?|hrs?|h|days?|d|weeks?|w|years?|yrs?|y)$/i,F=e=>{let t=et.exec(e);if(!t)throw new TypeError("Invalid time period format");let r=parseFloat(t[1]);switch(t[2].toLowerCase()){case"sec":case"secs":case"second":case"seconds":case"s":return Math.round(r);case"minute":case"minutes":case"min":case"mins":case"m":return Math.round(r*60);case"hour":case"hours":case"hr":case"hrs":case"h":return Math.round(r*3600);case"day":case"days":case"d":return Math.round(r*86400);case"week":case"weeks":case"w":return Math.round(r*604800);default:return Math.round(r*31557600)}};var ge=e=>e.toLowerCase().replace(/^application\//,""),tt=(e,t)=>typeof e=="string"?t.includes(e):Array.isArray(e)?t.some(Set.prototype.has.bind(new Set(e))):!1,z=(e,t,r={})=>{let{typ:n}=r;if(n&&(typeof e.typ!="string"||ge(e.typ)!==ge(n)))throw new E('unexpected "typ" JWT header value',"typ","check_failed");let o;try{o=JSON.parse(y.decode(t))}catch{}if(!h(o))throw new _("JWT Claims Set must be a top-level JSON object");let{issuer:i}=r;if(i&&!(Array.isArray(i)?i:[i]).includes(o.iss))throw new E('unexpected "iss" claim value',"iss","check_failed");let{subject:a}=r;if(a&&o.sub!==a)throw new E('unexpected "sub" claim value',"sub","check_failed");let{audience:s}=r;if(s&&!tt(o.aud,typeof s=="string"?[s]:s))throw new E('unexpected "aud" claim value',"aud","check_failed");let c;switch(typeof r.clockTolerance){case"string":c=F(r.clockTolerance);break;case"number":c=r.clockTolerance;break;case"undefined":c=0;break;default:throw new TypeError("Invalid clockTolerance option type")}let{currentDate:u}=r,l=oe(u||new Date);if((o.iat!==void 0||r.maxTokenAge)&&typeof o.iat!="number")throw new E('"iat" claim must be a number',"iat","invalid");if(o.nbf!==void 0){if(typeof o.nbf!="number")throw new E('"nbf" claim must be a number',"nbf","invalid");if(o.nbf>l+c)throw new E('"nbf" claim timestamp check failed',"nbf","check_failed")}if(o.exp!==void 0){if(typeof o.exp!="number")throw new E('"exp" claim must be a number',"exp","invalid");if(o.exp<=l-c)throw new I('"exp" claim timestamp check failed',"exp","check_failed")}if(r.maxTokenAge){let R=l-o.iat,X=typeof r.maxTokenAge=="number"?r.maxTokenAge:F(r.maxTokenAge);if(R-c>X)throw new I('"iat" claim timestamp check failed (too far in the past)',"iat","check_failed");if(R<0-c)throw new E('"iat" claim timestamp check failed (it should be in the past)',"iat","check_failed")}return o};async function ae(e,t,r){var n;let o=await ne(e,t,r);if(((n=o.protectedHeader.crit)===null||n===void 0?void 0:n.includes("b64"))&&o.protectedHeader.b64===!1)throw new _("JWTs MUST NOT use unencoded payload");let a={payload:z(o.protectedHeader,o.payload,r),protectedHeader:o.protectedHeader};return typeof t=="function"?{...a,key:o.key}:a}var dt=/^(?:Bearer )?([A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+\.[A-Za-z0-9_\-]+)/i;async function q(e,t){if(t.SKIP_AUTH==="true")return!0;let r=dt.exec(e.headers.get("authorization")||"");if(!r||!r[1])return!1;let n=await ee(t.PUBLIC_KEY,"EdDSA");try{await ae(r[1],n,{issuer:"dapr.io/cloudflare",audience:t.TOKEN_AUDIENCE,algorithms:["EdDSA"],clockTolerance:300})}catch(o){return console.error("Failed to validate JWT: "+o),!1}return!0}var be="20221228";var ut=ce().get("/.well-known/dapr/info",async(e,t)=>{if(!await q(e,t))return new Response("Unauthorized",{status:401});let n=[],o=[],i=[],a=Object.keys(t);for(let c=0;c<a.length;c++){if(!a[c])continue;let u=t[a[c]];if(!(!u||typeof u!="object"||!u.constructor))switch(u.constructor.name){case"KvNamespace":case"KVNamespace":o.push(a[c]);break;case"WorkerQueue":case"Queue":n.push(a[c]);break;case"R2Bucket":i.push(a[c]);break}}let s=JSON.stringify({version:be,queues:n&&n.length?n:void 0,kv:o&&o.length?o:void 0,r2:i&&i.length?i:void 0});return new Response(s,{headers:{"content-type":"application/json"}})}).get("/kv/:namespace/:key",async(e,t)=>{let{namespace:r,key:n,errorRes:o}=await ie(e,t);if(o)return o;let i=await r.get(n,"stream");return i?new Response(i,{status:200}):new Response("",{status:404})}).post("/kv/:namespace/:key",async(e,t)=>{let{namespace:r,key:n,errorRes:o}=await ie(e,t);if(o)return o;let i,a=new URL(e.url),s=parseInt(a.searchParams.get("ttl")||"",10);return s>0&&(i=s),await r.put(n,e.body,{expirationTtl:i}),new Response("",{status:201})}).delete("/kv/:namespace/:key",async(e,t)=>{let{namespace:r,key:n,errorRes:o}=await ie(e,t);return o||(await r.delete(n),new Response("",{status:204}))}).post("/queues/:queue",async(e,t)=>{let{queue:r,errorRes:n}=await ft(e,t);if(n)return n;let o=await e.text();return await r.send(o),new Response("",{status:201})}).all("*",()=>new Response("Not found",{status:404}));async function ie(e,t){if(!e?.text||!e.params?.namespace||!e.params?.key)return{errorRes:new Response("Bad request",{status:400})};let r=t[e.params.namespace];return typeof r!="object"||!["KVNamespace","KvNamespace"].includes(r?.constructor?.name)?{errorRes:new Response(`Worker is not bound to KV '${e.params.kv}'`,{status:412})}:await q(e,t)?{namespace:r,key:e.params.key}:{errorRes:new Response("Unauthorized",{status:401})}}async function ft(e,t){if(!e?.text||!e.params?.queue)return{errorRes:new Response("Bad request",{status:400})};let r=t[e.params.queue];return typeof r!="object"||!["WorkerQueue","Queue"].includes(r?.constructor?.name)?{errorRes:new Response(`Worker is not bound to queue '${e.params.queue}'`,{status:412})}:await q(e,t)?{queue:r}:{errorRes:new Response("Unauthorized",{status:401})}}var Oc={fetch:ut.handle};export{Oc as default};
//# sourceMappingURL=worker.js.map
