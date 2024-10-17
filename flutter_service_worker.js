'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "cf54afc7801babdccd7894bfcb110c3d",
"flutter_bootstrap.js": "4de0e065a7dc87f0f89089f1032865b4",
"version.json": "9a077137d1ef72a66524566f2159b1bb",
"favicon.ico": "84450c309a8089cd239bdee384df0c81",
"index.html": "b54648b56fe142117336f6c55e7a52e4",
"/": "b54648b56fe142117336f6c55e7a52e4",
"android-chrome-192x192.png": "d0d8137c3ed76e9e3ff3d2d2d365fa63",
"apple-touch-icon.png": "2666f7da98f4bdeb87f1160fe10abcd7",
"main.dart.js": "116aaee7b1f476310cc3024f9f7db185",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "d0d8137c3ed76e9e3ff3d2d2d365fa63",
"android-chrome-512x512.png": "e8a71ca4c4c34671f994af7bccd9d709",
"icons/Icon-192.png": "ac9a721a12bbc803b44f645561ecb1e1",
"icons/Icon-maskable-192.png": "c457ef57daa1d16f64b27b786ec2ea3c",
"icons/Icon-maskable-512.png": "301a7604d45b3e739efc881eb04896ea",
"icons/Icon-512.png": "96e752610906ba2a93c65f8abe1645f1",
"manifest.json": "280e949a4a63cbc4b703efa9d237e9dc",
".git/config": "71b8b0c663691ccf4740684b2b2d34a7",
".git/objects/61/2b81f302b1a7a03d6d945e38f62cd8ddaedf60": "fd9485b25ce8cb8f1e11ccd5b32bb0c7",
".git/objects/92/63a1bd293c1c1f31c70224170b2b1eede95a38": "87070e7a19d8dc6e2e1698033a27a308",
".git/objects/92/0c029eb5e6cb6cc554f5adbea3e0d406775e9a": "22a8bc8b2e4bbba8479a7abe4c4d5784",
".git/objects/66/9e977f825a31187aa36deb37f26847fd125301": "2cf4152f5189e1dd9e0ccaa26ecbfe9d",
".git/objects/66/ac43b9f84534e9ff2a3f6d86aa77406224f29c": "4f94844222d0e67f26c7f6fdee2a4c29",
".git/objects/3e/dbfd4b62775a08f4e9a423850f3fb430b50325": "dea4121f03c167892c54806e414f5a68",
".git/objects/50/193179c7d59054254c8c8a8685e0f43c6b5685": "43516fb6e77a7c9bb30fe6d3a70d01bd",
".git/objects/50/7def64276dd407413b1a8b954489c7350478d9": "9f5c5499b1c601fd0fe80ee402a27d4f",
".git/objects/68/95d9449f9b8c02f3b40419fbbd552f894631c0": "846f5b32a1066155cb5d0e1db9a1f423",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/3b/21f0844ae9212497524a61c7e54776e4589db5": "d7b475369eb37a1676c0006059ba85ab",
".git/objects/3b/7f0767a397ce6611f60f36cb3457b765cda09b": "cf68cdf17055f467815d597ec373a619",
".git/objects/03/6c35f2563f49005d8b6ce97d4fc8ce4445001f": "faa542ee646b9fa21791157bdd60e43d",
".git/objects/04/8aaba42c0ecd9681d8b1690c5eca3feef3d8e7": "c220e18372435a04bb68c74ca5080b91",
".git/objects/6a/2fdfd07059fe79ff016efab216fa7fb34206bc": "2f703e8d61da896ad6bd7ea77792733c",
".git/objects/6a/75db3ae2e613af12e07c6958713dc4a996c3bf": "506db4fe787246a54b659e7c24c93ff6",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/69/17f0ceae6e13c398122f91352654dd31bc0d1d": "d30c7543a7a48e85d8dc4e8d770133c8",
".git/objects/69/9f113eea27b950af30fe1ce76ad3ad40f022b4": "c16fc148dfa9e59436be88dbf1223026",
".git/objects/56/4c581a18f48d4f6858403fe22c3d82d7102771": "438cd40b99d51debf95ba9420cc88dad",
".git/objects/56/7e0e169daf875aac205c97b0cf7c51ba907c16": "9e7f352caba242fcee2024352787fff6",
".git/objects/56/2852d7bcc3a0e7462fe16733ab030ecaacf672": "6710fc02be97d4b9917c46106556163a",
".git/objects/51/8d091e9112955ce5fd85644ec69867f5a1a10e": "b4d70853daee5a5692ab8958660091cc",
".git/objects/3d/2b4474afc702c8a3077767814846da4c51ee37": "0c7c696ba043bf1dc34e16dfaea43441",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/93/589f2133e5a614a73610a38d583a929cf79225": "91291f49fdf8b5ffb56095ab10156ee8",
".git/objects/94/455be3a4371e66ad9bb467b5b5f4d6f33f624d": "d6a1bf2c02136bb2eb13eee9a92b5657",
".git/objects/05/3630963696272a04a9a71d8a68613c47860a5d": "fe9850264d2866626297bc7689e04b35",
".git/objects/9d/b8971cc3a074b084f828e346edcbaa6d5f7584": "6ad663690954b581e8f77b030a1150f6",
".git/objects/a3/0dce3555732764f987379c3816def9cfaeb90b": "3ca33c22d4213d38b08c175060ed1620",
".git/objects/b5/49f532274cc0d4913c485e2d6aa127f09be7cb": "64b48d2bad5eaa459e05d7109b62c191",
".git/objects/b5/931bf2f242147c981218d24f80a21552e974f3": "7cf71de0a55a4795d97b0118c1daa92e",
".git/objects/d9/e71e70728b0cd8cebfe0773371d47bf87c3d83": "56ceafd172c97fcb0538a6b072fc8ea4",
".git/objects/d9/f63f86006d563d76a52de0eaa6355536fc49d2": "a905452ef3414608171621afb77621c4",
".git/objects/ac/936ff941156fe407b637d60128c6ab84cac1c4": "8662cf9fe0b44c8bb5779772293cc839",
".git/objects/ac/0cd5d1ba6fd142a4bafa9fa3bae533d8460be1": "80f7803dd117222cf96d7b6f84e8f73e",
".git/objects/ac/a80c2e1a91c7b617fdfee1f8aa9e3afea0d779": "b4d9b1afabadf08fe1fe0591c3e223ae",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/b3/9e3ad91b22a1a1d69121c3a3deb14381300c91": "9dc47a7d81b2865b547dc471689c3a72",
".git/objects/df/1a40d9d8fb87ebbabeec2f9269d603f17d8109": "0b300310a26a72ab93ce498c5320f898",
".git/objects/df/e346f1bc4e617de8cf3d7eb1d814e651e43182": "ab31df85165c5e83be9c5153adc973cc",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/da/1dfd0138e7f0402d08f180e0b54183a6bd1ce4": "cf347365e6a1cf097b4166cb9b71eba8",
".git/objects/a2/10b83f77aad4cb2f689d2389b8289eadc6a7a5": "9f223e86dcb3d816c9fa55cc9baa51e3",
".git/objects/a2/3e7fc1f527a4dd983cacc90f0ae983947c17d1": "fbcb51d7ac2fbd5e11036e95777bd63a",
".git/objects/a2/672f26d9e62cae12aeb1193f3a74cd43abff78": "8a845765c7d16c32ab1619e27d02b6b7",
".git/objects/a5/18ec49c35a2489e7d97255865535a940f3521d": "a2305610d41d7002d4b039acadba854b",
".git/objects/d1/b6b9e78159464d11e725598d2e35681fdc9d98": "c914ff6cd047e45c51887f3304f805fd",
".git/objects/d1/ce978c24be891bb63b7c85d17c97d7f40a43b1": "bdca19a3c4f12f041d9db04855c10bea",
".git/objects/d6/9c56691fbdb0b7efa65097c7cc1edac12a6d3e": "868ce37a3a78b0606713733248a2f579",
".git/objects/bc/1e003ae9c8e0fbf646820b8478f8bb7d583709": "8d0dbc4b7827a0ef5023c1f2d9152717",
".git/objects/d8/19045039f602b1bd0b33d7c27db8b3954acd12": "ae9d4814ba2a8f281c85b3de9618d96b",
".git/objects/ab/7f58cf63cbb46bd2f4e440458dde8e2452c950": "b3ef1644e1c3afb6041df75f19860f33",
".git/objects/ab/43b5ccf57f82e38f4476bbf23d90659cc26eeb": "28519f2b90bdfba1ae71250611581854",
".git/objects/e2/cad0add18308b9f0a94d86f661036cfb0fba19": "1eefbba286cc58043dc44a07f5cacc12",
".git/objects/e2/9da2f1ec907f93fe66a16e6a3a4dd7bd22fbbb": "9e7718213ace1438f165edd0a77da034",
".git/objects/eb/9b4d76e525556d5d89141648c724331630325d": "37c0954235cbe27c4d93e74fe9a578ef",
".git/objects/c7/b8f3d32c8ae4d9434cf2a4ca519a7e6d0a8a66": "888b8f1b3c3e0e2c598c7feb8d6b53ac",
".git/objects/c7/5ac34203cf3e1e7e58473c7b59cce538f35a40": "8d19179733c450686b3bcff2103c374c",
".git/objects/ee/ebfd7dcefc3896869e69873c90dcf961446df9": "2c3c1797321acab4f40f9a11f3614b74",
".git/objects/fd/bc3894dab0fe1cbad1bd35ddece5b2f035d5ef": "021a3f24754739efdb34ce9d12466258",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f5/48e527f0962f4490add2131861b54150bdec3e": "ae1e1a2842efb642edc5506cf824d9cd",
".git/objects/e3/0b9df55a3f6f70dee2e4e3822acedc4b0f4335": "f8672d3cb10e828bc0ed3963cc018310",
".git/objects/e3/1c19dd75cb8ae252832e7b5a8c32ca1240225e": "aea2b484b13be4dc389bcb4e995d0d60",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/fe/bb083b3842d65e4259e056d464759876b08aa7": "f9cc840a5f682f8a095a73a467afa16c",
".git/objects/c1/e754069a7b06e97da3e15c491c88ca0904715d": "29d540b652adc64d667ab5512d98ab28",
".git/objects/4e/de5efcff63362b0091aa692bfc252fef700be2": "d6cbe87d97d66ff954d2a3fca4cb1df2",
".git/objects/4b/692210739df4374e614e25b9d3c69e0abaf768": "5c49680ec016d7905e24ca5b0caf62b3",
".git/objects/7d/ef144f5b38ca457421c7ebba1e75ab22ea0379": "e5e61f72166469cd70a14682a315122f",
".git/objects/7d/e809feb51f1a31f8607c6bf9220bef9f1fe22f": "5218be83ba5cc8ec76a470765f576975",
".git/objects/29/ffed49de42558b114ed5565e73bde6de989f57": "01969a710e4537d63b10665c6ad7b40a",
".git/objects/29/c1c600c13f4698365c9494faa8151f1143f4a3": "d2c643a467513f15a1b684d57d220f4b",
".git/objects/16/f4498424105d6f36ea4eacc76c1ab06ab7cbe7": "2c939a783ac8c312018055f3262e1975",
".git/objects/16/274f7f3516493321a0ec70716c96d6324bcc32": "318be9cecb82d3f1c2775f80143e576e",
".git/objects/16/b9f42167f4dff5a4bd68bf7e458bc6c69cc11f": "6ba38dc78a1ccee8b079aa95ed9ee34e",
".git/objects/42/b3b10d57df81058407eb8a059c281936229646": "615c2cae701acd7aea7815ac0043d8b3",
".git/objects/45/cbe3c86cb84d918fbb7a938014cc5063235344": "7f5ef77bed5173150beeafc0ac5bcf2b",
".git/objects/45/a8a5be24bff512473f831d40cf859d7436bf02": "8a63bf8442a5c2e4e7529aef625cd9df",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/74/c35e82cbb120f61e6ef9bf73761c36c764e214": "d1d1ad46926ed2fbf13a3a2166debc28",
".git/objects/28/cb2d8a57135df77b9c6e7607132b0a6ec8c220": "7fed369ba1ee1d93040bbf5b566c2b26",
".git/objects/8f/f64d269245e8416c9b5a5404bae3f36e953561": "f16b1169ff710020296017e17cd26dab",
".git/objects/8f/1bfa7fcfaad169677748a5aca912523d5069d9": "f1dd44cbd236c4e08750f75a0d439ae5",
".git/objects/8f/559d7e1f8992f9e4db468ead5ca9d16390223a": "f8bbf98b65373f8ec9847737304b564b",
".git/objects/8a/aa46ac1ae21512746f852a42ba87e4165dfdd1": "1d8820d345e38b30de033aa4b5a23e7b",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/75/33a2cf2f040e6ea75791b378f51944b9427c3e": "1694df3e4efc048b13b20ca88a9c1de2",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/2470469c1a7ede7548b8a3bf7c0cacf3bec398": "73503663596749a4ef84e5cdf2d84ad3",
".git/objects/2a/cc803a8b936bc2c0bff9b6c50ce6d44e150afe": "4b0d1a9b179eb65e179ee8f6a96331b8",
".git/objects/2a/2056cc12cbb76937db4a003466dbedc511b221": "f93c6c15c9e4836cb5acff20a8b46194",
".git/objects/88/cfd48dff1169879ba46840804b412fe02fefd6": "e42aaae6a4cbfbc9f6326f1fa9e3380c",
".git/objects/88/a5b8832c97a4fc9a33f19f155da6295ff47ce0": "8ac8e2a630d303bd390cee09652edd21",
".git/objects/88/112bf4c8984e326770e9f083e7c4dd34aa6403": "e5e09ee2473c337afb5f851860f5aa48",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/07/d589098e29fd5299db935208dbb14b7aa3f2ac": "525b94d62f8ef4dfef5369f6674a0c14",
".git/objects/38/7dd6ac7d9bde0b6f0f2da7c8fc10636fb091da": "67d2c2b385c6fcf2c3157f788162cba1",
".git/objects/00/e884b0749e32f3d3b8000401fd1659a2c8dce8": "5afa34242ecdf8fb7f13b65daf6c18fe",
".git/objects/5c/1e3e59183e052dd69e4b366c4901e28258aea4": "8e92746f0a940a193e26b08774cd430c",
".git/objects/5d/4d4df43937195e07fb5b67159c342fb687fc1a": "0487ae27f08fb9be0a9589ae05eb38b6",
".git/objects/5d/dc775d72f0a57e81320da331c80633e2d0e0ee": "17592e337f9c8a7d0a14512bef4a3e0f",
".git/objects/31/66e181fbb9c1cfb8b000797275413d83963a48": "17577e05defe643d5f1818563c518879",
".git/objects/65/d1bab0567dae9f015e99cd45653790ce40ab7a": "3504bf23447f5bf5c81d5e9a796b003a",
".git/objects/62/58fd4a3b35d6a1b60d596c9b492c2d7daae821": "316c3aa102df0a9e79293f15d446bba5",
".git/objects/96/ff09cfc3779fa713a87f31ea4408abda72ab66": "2bda5d5e20201ab6ab89c424f89ae801",
".git/objects/96/2d563af0b2a629571e8cb47be190d083f8b171": "532f19e58f47876c19a287bfba5e3747",
".git/objects/96/8791dd032dcb41b2fa6342c7e1881e417db28a": "239287fb661ce22f0573960394b55de8",
".git/objects/3a/7bc65e85cda8209316ff1180f5409451ab6b45": "c24ab622bd8bb2ceddc076455750d522",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/54/c101e74a6341d1e04166cf4314bb1f682efea6": "e14a22cf9527bc1722b183a9d5ce11fa",
".git/objects/98/03a36c3f1f69416f593e6611130afe804dd574": "7c25bfe295ec4774d66d56d68abffad9",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/3f/38898df72c17a925ba801d1a06a43c442d7c81": "9c1d95c6320afafe5bec703cb7ab9c11",
".git/objects/3f/56e6202cf501225c2d12ca56cbbb3fff4a46e0": "b32d24607096ef9ed26ff783125a59e7",
".git/objects/5e/e5915fbe6e75ccfc4c2664bef69f6205c8ffd1": "46cb89fbd9f1af108dc7df4a0823f2cb",
".git/objects/08/7dce62e066392c5fd99083514addd1d9a39621": "8ee87222b81ec2ee486c0ae6e9b57b19",
".git/objects/08/0ddfa07aa38ec0d5a49fc2a13fed85a5303011": "d5f49713b8dcfd7b3d111fffe59840cc",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/e6e0af92c2481a13144724732d32536d90228d": "629bdecfc3fbb88594f80b34adbe1c7d",
".git/objects/99/e7c5308d64fa66947537265d7ae06bbf4f83ec": "6fb31cc56cda86363892e60a5138752e",
".git/objects/52/def6a7de2390aff2367b8360413b66bf221451": "78f4d2c6192ee45d78e084cfb7b7837c",
".git/objects/0f/c711a3fd05110d853113cf19559a81d425d190": "1092cb6446f8920ce5cd5ece4790c1f0",
".git/objects/0a/290d27fe86b215c7a6827ef6c6a1c5aefad641": "94dcba4ef2991fc00dfd1d7f43ecbb44",
".git/objects/0a/24633e923b0fc8e5eccd84657286891e56b49b": "58f1bd510e9e11086c35fba0ae7149a3",
".git/objects/64/a0a88e440ae9ce7899698514e15404fe7c1c16": "64da14035ac0196d31c2365aeb2c9301",
".git/objects/64/df1ecae18e9e6d9017ddf821467c0ef94e67fe": "abad0174c3bdfd3f2e9c2a59eb802534",
".git/objects/64/553570900eb79741d8a259a9e73ee92c5b1989": "32c54bcc1c9013211bedb8dadcd1bff9",
".git/objects/90/50b8d6253108748c38eef12e10a4f0d9225a7e": "0d59fbb91405facbf50de0f9084c2d8a",
".git/objects/90/7dd09a8cce826a06ad5954bb120df31bd9a03f": "3ddfb8f80b97fffe8bcd5f3b7bb579ff",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/bf/c08bf5a3a489e92f17563b26990f66168b392d": "239a641838f3b7f01e79884fde56dfeb",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/b8/fc83cb95d002ceb6f7bc4b2bdfaf09614308f1": "44310c06f0d081638d20fe606f61763d",
".git/objects/b8/8987f971e2b5ac366be526c14f788ae9438776": "fe3cf5bc0d1c1e513567024275504e33",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/96eee6817e130916d0cb55b0726a5b6457adfe": "4ed64b0da920bdbd72643329343974ef",
".git/objects/dd/beb7066e6b8e01329aadffcb565a5e2012010e": "d623921e1cfff7c407dde96f74e3084d",
".git/objects/dd/3b2c6b39006b6756e2f288ff4b61487fd00e48": "3d09cb075e903c09704e95041c225e23",
".git/objects/dc/2e32384aed7ef3e0170769fbf9bcb6e13a3d90": "7794c306db32c1b8a41738a9c4de4122",
".git/objects/d2/71912770387ff128e6520696e5390b6134aa70": "1fced145fd0a3c76f58ace852997acc8",
".git/objects/aa/f1b693d8e069ff45bda1d5cb7ba9313ed6ebe2": "16182fa7b6eb4106d0cc293d45af86f8",
".git/objects/b7/49bfef07473333cf1dd31e9eed89862a5d52aa": "36b4020dca303986cad10924774fb5dc",
".git/objects/db/ff0ca29ec8f696c6f2a780ab1e54a968feb42e": "c85b00af5531d4ccb4dfac45ef920cba",
".git/objects/de/a3f8b7f1ddbf00e7f032fe0629b960fff25797": "bebcee34959c42bb2580465e89b6beeb",
".git/objects/a6/f945ab7f4876601864840300a4201727c5be31": "d30d89558e1113ce6f66909237c3d488",
".git/objects/a6/72fc32f8df11ed9248931204c7d6271c752051": "e494a1e2d9364fd6d2fdf60c20906d18",
".git/objects/a6/a0abe6e23013e48c24031bc077a2384859b8ac": "df4f98e7b282842fac242b3cb0266f5f",
".git/objects/b9/2a0d854da9a8f73216c4a0ef07a0f0a44e4373": "f62d1eb7f51165e2a6d2ef1921f976f3",
".git/objects/b9/39a3779cd7b5d9d1fe4d10fe7aed445f13df6a": "0d0598e25a40b9807d4dc1a1271cdb3f",
".git/objects/b9/5fed9f63ca283a394855e3a7347716fa475209": "d92536b7da77f07ca2cf7d2802fec35f",
".git/objects/a1/1231714b1f6931269cff1591fe2754e7781e72": "b99f44bf387594601e4b63f0a7a397ae",
".git/objects/c3/bd502850271d855c5c49096ea7ec86799f8c92": "23f814a207adae2fb9fccc4123db53db",
".git/objects/c4/e24ba332b0bb8d829459626f9b5a3b5ceeca9d": "9d3b9e1d04177afa27d890f973e578ec",
".git/objects/c4/7699633fa2f9903df1b11e0c6b02afbae09855": "9847142ee0d5bfd02774e75569e6c9e7",
".git/objects/e1/048709d57d2eb7ddd74e7ebcfaaaf4d5a6f90e": "88b1c939626684f968e2b34ca9dd0a84",
".git/objects/e1/d7e83e39dfe3323a94e1441d08ba679b92b5e7": "009ffaf83f971be1d658bd7005af2bc3",
".git/objects/cc/ff1503917e01bb6ad61c294c5686d3afccef76": "72e0fbf0dcf3d4be47585455a05c3fbe",
".git/objects/ff/d713169ecf647980e5e70bb3fe06712075a8da": "fde8cfec90dd9e9dc5caa9cb91f14bb1",
".git/objects/ff/abba496b7fc9e4a3330033b241d0b6fd2ec638": "f086bb25c9bb593a4ac2737391a793ab",
".git/objects/c5/78fe6df2a7d473e0f4e01c31d3287c9069f728": "9a56eb710e114339038cb127ae9d53d9",
".git/objects/c5/f961bc35c6738826c4c34b88d65e6011fe3f82": "4d1a16d9fa7b8c270a80d4280b73a25c",
".git/objects/e7/fe9a37b39d0af304bfdadc46125bff0871db0b": "26a7cdd632fa3f273cb5b8aa77144e80",
".git/objects/cb/a1bfa8582181d3f29021e2dee6367f8531437f": "baad9f02407c6e7e4ce67b65e1649dc8",
".git/objects/f8/5d3f3f44898961b90536e3b379516d55cecf08": "149b75fd60d3ba81ed0a2e8508d1e243",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/e0/0340d562b43f4f61a6be08fa9329541582ced7": "473c53f258aeaf84da5fed8fa8fe32a5",
".git/objects/e0/67aa16c293ed5f6efdc404bd403854e9f04540": "fce471cdae9162a4649a302333be118b",
".git/objects/e0/368e8f3c7f28a06c7257174479b3b8023bb101": "ddf5f188b31331c0533aa24bd7132e1b",
".git/objects/46/05106e32c5a95b0e11a19fb3d430024b9ab59f": "1afe44ec35710aa00e1f7b3fe90380d1",
".git/objects/2d/f23462494f7660228c9260e29ded5555ee6486": "d36921d03cdf702fed2f0d7447fff393",
".git/objects/83/5d239d04a33b3abcc0a9ddf6107fc673e74fbc": "c79c5f1a4a6d187e513def255134d48d",
".git/objects/70/86098738dc775524cd30be2ac2046bb74657d3": "8d97d122393c3736dd02a9820925ec80",
".git/objects/70/9f3b7339870facec4422e0833d10440b3d1f49": "ab7102c55abfa293335ffaeb1018c28f",
".git/objects/1e/a7d3ce922c76985e861bd3165ab5bd8313df14": "269d1d8c174e575ac0877089ea49d8d2",
".git/objects/1e/a21058f8f9822d5607551869237d86c9353489": "8af0ae16d5ae360fa0d6e92559a318b3",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/4f/d21cda482b2f01d210351351bb665e8b4c8912": "bb043a517abc4b19e6d01781d6d03508",
".git/objects/8d/5340e01db1ac900caa1c1c358083b9310968ea": "caeda595ee9bd020c0ac0cf7728f0c08",
".git/objects/8d/7d49926ddb595671e8634daf3f18c26fbd25fa": "8ecb9f78c10e7b1d3df0bede59f9e786",
".git/objects/12/5a94b26e738a2a68d7a719347a9bed6ca35843": "46fab37690954202136e4a5e228f13b0",
".git/objects/85/2b5143ca640e157d2042d04b5b2a9e1ccc9f4e": "4cfa8014dc4aefe9a76dfd7b8de0e3ed",
".git/objects/85/8ac5e42bd8b0d066bcf324098e72d208fff7b0": "498edfe8489b481fb208a7701789dab3",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/bb349ecf1ec3450a71526925d646ba4b8e3c6b": "57b0f3f56c0e807e0a4dc08faec2fb9d",
".git/objects/49/12d08f5a696631e5c6d2033a5354ecebfe863d": "ee97eb2fa6abee6f9671a20c6ce73bf8",
".git/objects/40/e50cf69a3748a1567dce980311a29d97aa0c09": "7520ae249bbe6297f32a7af9674d0609",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/f8b5ad4db5fe4f2bceb2d7f5025ce412fca92f": "d5ee65c5c5b23f6169a996b51caf1c3b",
".git/objects/2b/7503359b8d141e2b6c4e700f5ef379b239851a": "ee2572771f8cfcf7c725d741863c5b00",
".git/objects/78/c14c798137c92e084fa330c677dc1622c4fa87": "759ff784c82aa21ef382edadc3b21004",
".git/objects/13/5f1eb620825a1f977d9365f2d5ca7e14aa635c": "7fb831fc192a3b1811eef96be01b1257",
".git/objects/13/7394955588298643882b8a061b8b0f704a0a6d": "a905009ba468374846fdf6c9d057b2da",
".git/objects/14/8ada3dbcc32ecd616fa34a7c89b0abeaba8373": "e8f8aed6a7be7ca7960f5d36c8109f36",
".git/objects/8e/336594304f67e71f2e07200d99dacc1a6a8884": "2c334ae66d952022b79f695aa56f3f73",
".git/objects/22/33c8f592981e7f0dee4f410849e31034050385": "71744c28f90e59e5096f01bf89e0db2f",
".git/objects/25/067a4841790ceab2676985a01f215e05c9b7ef": "fdbc6d9d1f205ae964045da3b5239c61",
".git/objects/25/e5bf9a02218869671950aef45626be3dab0e47": "8a76d4945e87daf6da328d27ba1023ec",
".git/objects/25/405adf0550ece2a6dd532d8043d3127ea8b43a": "6c072fa7f8de50fb5ce3a1e61aecfbd9",
".git/objects/25/e9905983e713a19960d5996486c30ca1971027": "6a8738390736fefadde2283fbc3168dc",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "f3faa45fc77429c26cd735f0fc14bfd7",
".git/logs/refs/heads/main": "f3faa45fc77429c26cd735f0fc14bfd7",
".git/logs/refs/remotes/origin/main": "9a3a81481e4817bff976729bebed4890",
".git/description": "a0a7c3fff21f2aea3cfa1d0316dd816c",
".git/hooks/commit-msg.sample": "579a3c1e12a1e74a98169175fb913012",
".git/hooks/pre-rebase.sample": "56e45f2bcbc8226d2b4200f7c46371bf",
".git/hooks/pre-commit.sample": "305eadbbcd6f6d2567e033ad12aabbc4",
".git/hooks/applypatch-msg.sample": "ce562e08d8098926a3862fc6e7905199",
".git/hooks/fsmonitor-watchman.sample": "a0b2633a2c8e97501610bd3f73da66fc",
".git/hooks/pre-receive.sample": "2ad18ec82c20af7b5926ed9cea6aeedd",
".git/hooks/prepare-commit-msg.sample": "2b5c047bdb474555e1787db32b2d2fc5",
".git/hooks/post-update.sample": "2b7ea5cee3c49ff53d41e00785eb974c",
".git/hooks/pre-merge-commit.sample": "39cb268e2a85d436b9eb6f47614c3cbc",
".git/hooks/pre-applypatch.sample": "054f9ffb8bfe04a599751cc757226dda",
".git/hooks/pre-push.sample": "2c642152299a94e05ea26eae11993b13",
".git/hooks/update.sample": "647ae13c682f7827c22f5fc08a03674e",
".git/hooks/push-to-checkout.sample": "c7ab00c7784efeadad3ae9b228d4b4db",
".git/refs/heads/main": "26f9bf0b5ba6041ab54d7eddcbf55eab",
".git/refs/remotes/origin/main": "26f9bf0b5ba6041ab54d7eddcbf55eab",
".git/index": "67287460e6cbdd6ec9bbf632028e2499",
".git/COMMIT_EDITMSG": "888a3cbf202356912bf9b82ed5988f27",
"assets/AssetManifest.json": "4752f9408b5324dc2651c21eb31c2f0c",
"assets/NOTICES": "7545b99a360205bad8f1865e5b3caad1",
"assets/FontManifest.json": "0c48523ffc50e8ab816d06e2d8ed2ddb",
"assets/AssetManifest.bin.json": "c4f4cefc6adf23060e4fb476b67d445c",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/lib/fonts/YDYGO135.ttf": "e2692969ff5392368111433755a43a84",
"assets/lib/fonts/YDYGO125.ttf": "33e935854ee9b0261aa7e153d61e1bd2",
"assets/lib/assets/maps/uafsky.jpg": "b8b9f11b6e3928e9b0876bca9cfcd1ec",
"assets/lib/assets/logo/logo-kaf.png": "f757f43a2642eca13a343942ccce9308",
"assets/lib/assets/logo/logo-uiaa.png": "10566c0b26f04fa8479a066370fd4f3d",
"assets/lib/assets/logo/uiaa-logo.png": "091f3dabe56e4946217d675f532bd849",
"assets/AssetManifest.bin": "1170b4b5521c13cd1d4ef39e6fd6b833",
"assets/fonts/MaterialIcons-Regular.otf": "8671383f22fa03425c14f67b197595b3",
"favicon-32x32.png": "f9f28635b5854ad9b1f2bdfed8ad3b1f",
"canvaskit/skwasm.js": "694fda5704053957c2594de355805228",
"canvaskit/skwasm.js.symbols": "262f4827a1317abb59d71d6c587a93e2",
"canvaskit/canvaskit.js.symbols": "48c83a2ce573d9692e8d970e288d75f7",
"canvaskit/skwasm.wasm": "9f0c0c02b82a910d12ce0543ec130e60",
"canvaskit/chromium/canvaskit.js.symbols": "a012ed99ccba193cf96bb2643003f6fc",
"canvaskit/chromium/canvaskit.js": "671c6b4f8fcc199dcc551c7bb125f239",
"canvaskit/chromium/canvaskit.wasm": "b1ac05b29c127d86df4bcfbf50dd902a",
"canvaskit/canvaskit.js": "66177750aff65a66cb07bb44b8c6422b",
"canvaskit/canvaskit.wasm": "1f237a213d7370cf95f443d896176460",
"canvaskit/skwasm.worker.js": "89990e8c92bcb123999aa81f7e203b1c"};
// The application shell files that are downloaded before a service worker can
// start.
const CORE = ["main.dart.js",
"index.html",
"flutter_bootstrap.js",
"assets/AssetManifest.bin.json",
"assets/FontManifest.json"];

// During install, the TEMP cache is populated with the application shell files.
self.addEventListener("install", (event) => {
  self.skipWaiting();
  return event.waitUntil(
    caches.open(TEMP).then((cache) => {
      return cache.addAll(
        CORE.map((value) => new Request(value, {'cache': 'reload'})));
    })
  );
});
// During activate, the cache is populated with the temp files downloaded in
// install. If this service worker is upgrading from one with a saved
// MANIFEST, then use this to retain unchanged resource files.
self.addEventListener("activate", function(event) {
  return event.waitUntil(async function() {
    try {
      var contentCache = await caches.open(CACHE_NAME);
      var tempCache = await caches.open(TEMP);
      var manifestCache = await caches.open(MANIFEST);
      var manifest = await manifestCache.match('manifest');
      // When there is no prior manifest, clear the entire cache.
      if (!manifest) {
        await caches.delete(CACHE_NAME);
        contentCache = await caches.open(CACHE_NAME);
        for (var request of await tempCache.keys()) {
          var response = await tempCache.match(request);
          await contentCache.put(request, response);
        }
        await caches.delete(TEMP);
        // Save the manifest to make future upgrades efficient.
        await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
        // Claim client to enable caching on first launch
        self.clients.claim();
        return;
      }
      var oldManifest = await manifest.json();
      var origin = self.location.origin;
      for (var request of await contentCache.keys()) {
        var key = request.url.substring(origin.length + 1);
        if (key == "") {
          key = "/";
        }
        // If a resource from the old manifest is not in the new cache, or if
        // the MD5 sum has changed, delete it. Otherwise the resource is left
        // in the cache and can be reused by the new service worker.
        if (!RESOURCES[key] || RESOURCES[key] != oldManifest[key]) {
          await contentCache.delete(request);
        }
      }
      // Populate the cache with the app shell TEMP files, potentially overwriting
      // cache files preserved above.
      for (var request of await tempCache.keys()) {
        var response = await tempCache.match(request);
        await contentCache.put(request, response);
      }
      await caches.delete(TEMP);
      // Save the manifest to make future upgrades efficient.
      await manifestCache.put('manifest', new Response(JSON.stringify(RESOURCES)));
      // Claim client to enable caching on first launch
      self.clients.claim();
      return;
    } catch (err) {
      // On an unhandled exception the state of the cache cannot be guaranteed.
      console.error('Failed to upgrade service worker: ' + err);
      await caches.delete(CACHE_NAME);
      await caches.delete(TEMP);
      await caches.delete(MANIFEST);
    }
  }());
});
// The fetch handler redirects requests for RESOURCE files to the service
// worker cache.
self.addEventListener("fetch", (event) => {
  if (event.request.method !== 'GET') {
    return;
  }
  var origin = self.location.origin;
  var key = event.request.url.substring(origin.length + 1);
  // Redirect URLs to the index.html
  if (key.indexOf('?v=') != -1) {
    key = key.split('?v=')[0];
  }
  if (event.request.url == origin || event.request.url.startsWith(origin + '/#') || key == '') {
    key = '/';
  }
  // If the URL is not the RESOURCE list then return to signal that the
  // browser should take over.
  if (!RESOURCES[key]) {
    return;
  }
  // If the URL is the index.html, perform an online-first request.
  if (key == '/') {
    return onlineFirst(event);
  }
  event.respondWith(caches.open(CACHE_NAME)
    .then((cache) =>  {
      return cache.match(event.request).then((response) => {
        // Either respond with the cached resource, or perform a fetch and
        // lazily populate the cache only if the resource was successfully fetched.
        return response || fetch(event.request).then((response) => {
          if (response && Boolean(response.ok)) {
            cache.put(event.request, response.clone());
          }
          return response;
        });
      })
    })
  );
});
self.addEventListener('message', (event) => {
  // SkipWaiting can be used to immediately activate a waiting service worker.
  // This will also require a page refresh triggered by the main worker.
  if (event.data === 'skipWaiting') {
    self.skipWaiting();
    return;
  }
  if (event.data === 'downloadOffline') {
    downloadOffline();
    return;
  }
});
// Download offline will check the RESOURCES for all files not in the cache
// and populate them.
async function downloadOffline() {
  var resources = [];
  var contentCache = await caches.open(CACHE_NAME);
  var currentContent = {};
  for (var request of await contentCache.keys()) {
    var key = request.url.substring(origin.length + 1);
    if (key == "") {
      key = "/";
    }
    currentContent[key] = true;
  }
  for (var resourceKey of Object.keys(RESOURCES)) {
    if (!currentContent[resourceKey]) {
      resources.push(resourceKey);
    }
  }
  return contentCache.addAll(resources);
}
// Attempt to download the resource online before falling back to
// the offline cache.
function onlineFirst(event) {
  return event.respondWith(
    fetch(event.request).then((response) => {
      return caches.open(CACHE_NAME).then((cache) => {
        cache.put(event.request, response.clone());
        return response;
      });
    }).catch((error) => {
      return caches.open(CACHE_NAME).then((cache) => {
        return cache.match(event.request).then((response) => {
          if (response != null) {
            return response;
          }
          throw error;
        });
      });
    })
  );
}
