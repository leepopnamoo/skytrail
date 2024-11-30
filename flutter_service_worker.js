'use strict';
const MANIFEST = 'flutter-app-manifest';
const TEMP = 'flutter-temp-cache';
const CACHE_NAME = 'flutter-app-cache';

const RESOURCES = {"favicon-16x16.png": "cf54afc7801babdccd7894bfcb110c3d",
"flutter_bootstrap.js": "0b40507f96b4a3f584403cc1c5b732ee",
"version.json": "9a077137d1ef72a66524566f2159b1bb",
"favicon.ico": "84450c309a8089cd239bdee384df0c81",
"index.html": "af46a0762f71b2cce6091b2ff3e840ea",
"/": "af46a0762f71b2cce6091b2ff3e840ea",
"apple-touch-icon.png": "2666f7da98f4bdeb87f1160fe10abcd7",
"main.dart.js": "cb9981f880489619515509c46f9fe421",
"flutter.js": "f393d3c16b631f36852323de8e583132",
"favicon.png": "d0d8137c3ed76e9e3ff3d2d2d365fa63",
"icons/Icon-192.png": "d0d8137c3ed76e9e3ff3d2d2d365fa63",
"icons/Icon-maskable-192.png": "d0d8137c3ed76e9e3ff3d2d2d365fa63",
"icons/Icon-maskable-512.png": "e8a71ca4c4c34671f994af7bccd9d709",
"icons/Icon-512.png": "e8a71ca4c4c34671f994af7bccd9d709",
"manifest.json": "280e949a4a63cbc4b703efa9d237e9dc",
".git/ORIG_HEAD": "88833cb2bdf6e4785a3a9fc2e22ed4fe",
".git/config": "0017e385c9d8d3fd807d546f22574171",
".git/objects/61/2b81f302b1a7a03d6d945e38f62cd8ddaedf60": "fd9485b25ce8cb8f1e11ccd5b32bb0c7",
".git/objects/61/cc498b9f92ece9e565f807336d2079ddfbe26c": "25895ffa07ffa2c4645d9178dc5144cf",
".git/objects/0d/671ea080f478915aa7b4f5bf7429653fddf28d": "4816705896c0a4c149cb06563839af26",
".git/objects/92/b3953008840e0068003f30d741423aa2b763d9": "9aaac300f57d9410a69d98a2e4a6b3df",
".git/objects/92/8e587577b5303291062444269277025cfe89ce": "0121e8a180ad25f19f23dfdcd6bb480e",
".git/objects/50/193179c7d59054254c8c8a8685e0f43c6b5685": "43516fb6e77a7c9bb30fe6d3a70d01bd",
".git/objects/50/9e22b35ee500337a223edfc51e18b6bd4dd19e": "c542e732e104db75c964849e0e32e3d2",
".git/objects/68/95d9449f9b8c02f3b40419fbbd552f894631c0": "846f5b32a1066155cb5d0e1db9a1f423",
".git/objects/68/dc59c3de8f4cfb3b7280c96188522c7297eafc": "0de9c94a1ba9504ad545ab0646366410",
".git/objects/68/3486d32ec3cd00d51e0c077cefb27d8028ac61": "c88bfb2439b755945f55010200c452bd",
".git/objects/6f/9cded12c0bcd68179584b16e69a787d9c01a43": "4b6dc0de233ff6f070915d8361c51eda",
".git/objects/9b/bbd3b000320b4ef363f9200ef167ab309c2587": "476006c6e74a2ad8e6600d7a0897e889",
".git/objects/32/aa3cae58a7432051fc105cc91fca4d95d1d011": "4f8558ca16d04c4f28116d3292ae263d",
".git/objects/58/4e42248e05d472815da580599f56f1a06e04d4": "21a2bdfee7c1e96b563b938ec05af0fd",
".git/objects/67/803bb642742643c9525b6d25b8ade89383232c": "5d40c4c7976f38c9b005ca506909bdbd",
".git/objects/0b/9fcf3d6c6058acc662279d9d22099086a0c78a": "0f20d8b31472ed851f3506e98bb44282",
".git/objects/0e/fe1635c34fd24d4713b9ed98ec1817e088a4db": "dd3d8cc36c08992d8c6f1532296f28b2",
".git/objects/0e/ad0407791767a06fa86a04ccfd14d78b93431c": "9d601cf50ed8f8027e5cd3c41d312682",
".git/objects/34/2c0d307b7d81f0db5bbe98f28b6bc1fe84dcf5": "3db324ad33956c4455a8689581203631",
".git/objects/34/04823c09e28caf421ceb8ca3c0c3c781245896": "115a9ed086b8de74e8259e70e5b19691",
".git/objects/5f/72e230e4db255da8a724ad07e45033d15e4696": "921f560385f9e4a836666d2178cf9703",
".git/objects/5f/2b693af760dd1ac9a241a90ce58a9b0eefb031": "ceb06f5a02b27ccac14405c949462c8f",
".git/objects/9d/af165f7f54081ed3aa225318065b31aeeb5f14": "eae52e7010a102fc1dd0fff681c24e11",
".git/objects/9c/e7d60a8d7901093d9ea82fe8c64f00a4dcc14c": "31e34d6001945ade0212683ecf3a393c",
".git/objects/ac/ca790537bce6316420799a69734eb9a3b6573d": "d5672f3b09129f88a16bf5cc742fbc9c",
".git/objects/ad/7e0474a89c8124a35356adeabaa0fe15064179": "1cf820f28352c8ea7c48bd3ec204f2e9",
".git/objects/d0/23371979cf1e985205df19078051c10de0a82d": "700b71074bad7afee32068791dec7442",
".git/objects/be/9b64100cdc1a4de8128eb4e6e096ecb4dbd18b": "518aa80c8a1cb2ac29058c1f41ab2576",
".git/objects/b3/f8d5d4f0b062a9d70ac46bead68b38e99b206b": "5d263cedaac562bf0cbf38587d531b57",
".git/objects/df/bde25f3cd8711ded782ccfb61d531beea8386b": "2af0c2a784fc7cddb75bf37b101e81e5",
".git/objects/df/1a40d9d8fb87ebbabeec2f9269d603f17d8109": "0b300310a26a72ab93ce498c5320f898",
".git/objects/da/fd65422747502c19b5c74b4230282644d2169c": "d8a62caf99a372ff6c7692e143787ce3",
".git/objects/a2/3a795c084d94bb9de9795a39ca500708015116": "fc627b92c4383279d8619003eca1b9af",
".git/objects/a2/a831f39fc6095639f6f9a10d3ba94d429b1a3d": "556e139b807f169a7385440bd958d86a",
".git/objects/d1/54a96b400048bcba5c95aae0bb98609cbf209b": "be0211f5e1ef34925af6b0b9092f6efd",
".git/objects/d1/ff6b17f91233030024b713f052c1d7e56a469a": "c390e791317890a4f16c077e5ec6fded",
".git/objects/ae/99d570bf2ca70e9dba96eae94b7ae21f854f4c": "f51d105b0467b1e02f8b712b84910731",
".git/objects/ae/f12fbc0c29d5c77fa246e4ac9f1dbcdcaf4131": "f6639fcfb5dd644d44cfbdd38935d737",
".git/objects/d8/6115b84f467834958469fa43fc9533aa1f5a59": "24801f3161c3315809cf8721ea2c6d5a",
".git/objects/ab/40985f92759ff36bc25be65d47910829547fb2": "10baff5f7592a9a5dacb8f8501f93c36",
".git/objects/eb/a12a40279b8efc0d82532a4ee951da561d51f8": "bb4bb20575884720bfdf62429de8f5f2",
".git/objects/c7/c4ed80f422e9866965d5cb4a86a14be073c6dd": "90fec9f3c30858affcbd9573f84ec9ea",
".git/objects/fc/d77958861a4ce51c63d719d61cb2f8783d48b8": "4578c64c1b362d3dcf5e54ccf4d34f3f",
".git/objects/fd/6a42ab8265c0b1ff4cee3a85ff7746cc08d504": "728d5c4c75c47f8598cdb1eeccb27100",
".git/objects/f2/04823a42f2d890f945f70d88b8e2d921c6ae26": "6b47f314ffc35cf6a1ced3208ecc857d",
".git/objects/f2/cc40e4ffeab1a6650a7f28dabf4c338f6d6f8c": "1757b593ad8cfddf76cd4382ad855621",
".git/objects/e4/910d78294e033f9bdd2297ce234bdf70c5933c": "db3b5abe5c3eb8d30bc434439e433dcf",
".git/objects/c8/c0f52db32a6bfc19f9396b6744ae65c01c9397": "0b875ab23ebb7e9e46eb73aeb72e0d8b",
".git/objects/ed/d80d80de6f03bbbb70acc8c3039a7795cad605": "403029b45de33af33624ec0a41c37471",
".git/objects/c6/1e09f5452f7b1fa3820fe6b309f4b01ffa0af5": "5687a7bc5da831cfd107d17f287743a1",
".git/objects/18/0a3fe07d146dd9b82308291c85274d9eb643bb": "f4f961252469039d3f9334caab646e0c",
".git/objects/18/b87cf7cd53f4c0a642f9b5de491098b120bad6": "7ea36cb07a820196fd66745bfa82a8fe",
".git/objects/pack/pack-257f91ad396deadefbacb8fb3dae772349c4695b.pack": "8b74aaffa623b15cd18c0a048211f6b6",
".git/objects/pack/pack-257f91ad396deadefbacb8fb3dae772349c4695b.idx": "f568d05000e09bbb5a3d54898b5e671e",
".git/objects/42/173b54634fcc83ac4a16a96e61768347b3d175": "c22a352471bf993b0098b850880f5cb0",
".git/objects/45/cbe3c86cb84d918fbb7a938014cc5063235344": "7f5ef77bed5173150beeafc0ac5bcf2b",
".git/objects/1f/45b5bcaac804825befd9117111e700e8fcb782": "7a9d811fd6ce7c7455466153561fb479",
".git/objects/28/39baee6177e914ace309f3c82efab46cc9e4fc": "c6715251cf722b2ece0bb5c079eda4c6",
".git/objects/28/21c32d383f853883ff043ae94645a470878b82": "488dbe973900fbe9473a1dc71cfd51c0",
".git/objects/7b/c6beff941247e1be1fdb4de3ef288530607afd": "360716fcbd36cfe9867a900dc782d160",
".git/objects/8f/32ff34ef83a1e7a79bf5573fa7e53c203c3d0c": "ddcaf1162ac7c259248e5822bc873f58",
".git/objects/8f/559d7e1f8992f9e4db468ead5ca9d16390223a": "f8bbf98b65373f8ec9847737304b564b",
".git/objects/7e/5ea2b816eb9fdcc2a733b43c24c407402ce6e2": "1e348183fc1ab1c15d3381872ed03cd3",
".git/objects/7e/877b0a6061d16955503bcc77bfb42a61ea1747": "979dbf155fb4cf7c8185fa8d14d4ae5b",
".git/objects/19/6b913309580a6999dfeb1ed86ccc9f835984c5": "a003840ebb2562866f0b6356ccc97e6f",
".git/objects/4c/1c9bc0def6dfeffce4d8adaaa44286796d2dad": "30609ab711c750070a33536aad445f77",
".git/objects/26/7848c02f5d867320110bcff3a975f22f174ecf": "1ac6b128e839e0ed24b1961f152d0c79",
".git/objects/4d/2448051e85f2cded4f1c8295dfeb547401a8ce": "9a00b50f47fb23a9cd07ecb14928d4cb",
".git/objects/86/03d0a3d2a91580f77171968c7d13e73fd1482a": "dc750bd17c929d834d260dd7dc0293e7",
".git/objects/72/af6ebd4b29db614cc184a99bb15868c43b11d9": "1be6f48c9581cc71968310c9d3edffa0",
".git/objects/44/a8b8e41b111fcf913a963e318b98e7f6976886": "5014fdb68f6b941b7c134a717a3a2bc6",
".git/objects/44/c3d6f958303fdb6bbd9f206d487a16f159d1e7": "12f2110e5ce5ccad7b60e6f57c40fa77",
".git/objects/43/c503777590089dd437c37352d5c1a8be344773": "25676ba89a59d439f313fb88b56528c4",
".git/objects/88/1f447517c9c44aabfc4476d251d68ab590639a": "bb1cd7fb6c94e35f4c40a42b7f67d011",
".git/objects/88/82ff738a72fa1796496c32dfba521568375792": "5d2080ad41084d37651449226f6c3f34",
".git/objects/6b/e909fbf40b23748412f0ea89bf0fae827ed976": "5f118419157d9534688915220cc803f7",
".git/objects/38/43194d459637be8d16b6e2bc10d5c4c68a15df": "cedf609433519cca395eac13e9a0ebd5",
".git/objects/5c/1e3e59183e052dd69e4b366c4901e28258aea4": "8e92746f0a940a193e26b08774cd430c",
".git/objects/5d/dc775d72f0a57e81320da331c80633e2d0e0ee": "17592e337f9c8a7d0a14512bef4a3e0f",
".git/objects/31/16d986146bdbf639ee8e00fba383274fa1cc80": "ca2895d24cb5b292d9b239727943a657",
".git/objects/96/0615407250851e8dc756bc1acb30c4b46d2df6": "c9b7151170753ebc0d243be579608c7f",
".git/objects/3a/7525f2996a1138fe67d2a0904bf5d214bfd22c": "ab6f2f6356cba61e57d5c10c2e18739d",
".git/objects/3a/e396a497e1170afac4f1bb3422703e90e5efa3": "64dcb103ef073509f0987b5fb470aa39",
".git/objects/98/57c9b3b0448c92818efc5fda0f206b21914168": "ecbde07c564dabbec0f249821051b8af",
".git/objects/08/32d0db2def1613c1c45aa4fe9156a1c6b7d589": "e05df183e5eeaddf39672a2516f9c41d",
".git/objects/06/073ae6ef51f58f27dacba8361588685e8409d8": "57357749638844a5e2d20ae542d755a2",
".git/objects/6c/b2106610c50f5ac4a8d7d140529f6f9b4fdc3d": "660e3e67af518711d42947496af54fa4",
".git/objects/6c/be91972edd8b20ef500ba8bccecc0fbed95f84": "68235875d7b9644aa28a0309fc416de3",
".git/objects/0f/77c523026f656b31f36aa89b5ccd3ec972fec0": "b9f1366298c34cb8948f2380387c8207",
".git/objects/64/553570900eb79741d8a259a9e73ee92c5b1989": "32c54bcc1c9013211bedb8dadcd1bff9",
".git/objects/64/9921dddf85060d9db36b267ba56d9d173ce75a": "7bb636b7e4da6a76946c16b25fe6d471",
".git/objects/90/bcfcf0a77ab618a826db0fd8b0942963b653af": "fc109675cdf1233dd6599a4c3c0a7a69",
".git/objects/90/8d1c40ae88a0f79bd706326cbad51d57c9d654": "9ed5619d6fe49ee4a14314c2b8990a52",
".git/objects/d4/3532a2348cc9c26053ddb5802f0e5d4b8abc05": "3dad9b209346b1723bb2cc68e7e42a44",
".git/objects/d4/e31adec10bd5d3f87ee8e74164b8dea53e4ae7": "e784135653897373d9469af1f0bbea46",
".git/objects/d4/04500184dd34f8a5206e1a73f37cb4bd8133b8": "ae47ebdd9315625bc731a1e529e65b26",
".git/objects/ba/5317db6066f0f7cfe94eec93dc654820ce848c": "9b7629bf1180798cf66df4142eb19a4e",
".git/objects/a7/17470832bb257e995ed3ba224f11b963340605": "583c64574d9df41582db1e06634f5c7c",
".git/objects/b1/5ad935a6a00c2433c7fadad53602c1d0324365": "8f96f41fe1f2721c9e97d75caa004410",
".git/objects/b1/51d2965a0a4d506eb4020862401ffa43a05057": "6b27faa7a25ada47e9a13b4d4ea1ec31",
".git/objects/b7/29e9489415f8315e584c1908118ba8d7f34954": "606b3c01ad0f761bc21e92b1f7aa58e4",
".git/objects/b0/53ee65717f7ff7b4d6e37423c7b0773e959cbe": "c5284fd40feedf370b2aa485b42ec467",
".git/objects/b9/eaf2857c1602108c7c306325d512f3249de452": "86c447f375b28db46da94ba36b2a7925",
".git/objects/c4/d0da6dce375ba48f786d8860e772ad1ac227a3": "a6e1a9f7144d4dbd3da652af4e3fc483",
".git/objects/c4/8f13e9fa5d6e5c34217f106d7d507b6e2e2ee2": "59e1c62a16cf02b19fcc2ae34103d36d",
".git/objects/ea/8924b316090e67aa3efb5b79b4185de372210a": "6041d0d89ca65d5966ef91ce8d460042",
".git/objects/cc/474655c1db7f21db4fdeb65dff5b523eb926f7": "2f1f9c916b7968eec88239003c226172",
".git/objects/f0/d3db617afdfd3cba600ac2a8861f3ac02fbab0": "16e753f7bdb9db375e45ba94b454fd29",
".git/objects/ff/e699df7723bd61c996b6593d56d99d1e26f8c5": "76e621372d93d9c7bad876f2fe5a89d5",
".git/objects/c2/b2e86ecbbe081cca13a32d56ace991a9f6cfeb": "076d7b5bd6da6c1a45e0916db4183d2a",
".git/objects/f6/2278e19290fc2f6a2103f970acbb08e5522c89": "96563aa006a6e99ab2325f1216c15fe8",
".git/objects/e7/0d12630b7e7aea716153cfe8bbe259abcc2e25": "2fe2579b943c081ae1fa466139064d4f",
".git/objects/ce/054e36dbbd2fb4c0542e9a78d79896e8d2271a": "cbeb86d9b3384f47a824ce21ecd82b15",
".git/objects/e0/7797437d096064bd90c373800dcb0f335c14b0": "16f9b9defb16491f8c733b09b022688c",
".git/objects/2d/e6bacba8d6cadbfc6a4df16e54f5d97eeb0b40": "b33a946a123831082b55dc25d400952b",
".git/objects/2d/116d920580367caf6a179155f344ede856bf31": "664ce7bca47fdb5e1d15a77de593527b",
".git/objects/2d/4a2a8e5afdff05ef47a75d8178d3da2956c36b": "412a4b7a60af65c4b19453464dbef68c",
".git/objects/77/e67cfef2bf8f6e1ff6fd740d825e87a542b60f": "7381c7a178075cc3bb60c5e16683975f",
".git/objects/84/0516208d35dcb4298847ab835e2ef84ada92fa": "36a4a870d8d9c1c623d8e1be329049da",
".git/objects/12/5a94b26e738a2a68d7a719347a9bed6ca35843": "46fab37690954202136e4a5e228f13b0",
".git/objects/8c/e3a9b5119842b32a8d2dac6abdc1c5cf7556a1": "8f4e280679a5df6eff7142ab2b07e6f0",
".git/objects/85/6a39233232244ba2497a38bdd13b2f0db12c82": "eef4643a9711cce94f555ae60fecd388",
".git/objects/71/67ed263b609aa9e2c3392e7bd714877ab49588": "c58f89aa3ec2137fe6896fbf74ae9004",
".git/objects/76/38b3316049df86f094f373dd36dcd4a04b73ea": "bb2a73228446c7639b7cd1e17c8bdca0",
".git/objects/40/5a7fb5812777c98c7eeb1a50dd4c78c030807c": "ed4a8c23d8acef86922e041dd8eebd0e",
".git/objects/2e/5d657b528b02a54e0ae65354b3ac5d78dbde8d": "33388f2413e4fce3176e464ab751d910",
".git/objects/2b/9f2fc53e954d9d5361a1416f8049d7033cdfc9": "136546882d3005966df01d51075b9d40",
".git/objects/13/2ec2d508c6d38e4414345e173ced9867d23004": "154081f953afcc4076965e6937ffa603",
".git/objects/7f/31ff5b96d91c3fe163b65e8aa309fd225e3c42": "aa04fe93d0328e06556f313221d99e2b",
".git/objects/7a/697bdd7479beb1649a0389ee993a4720803cc4": "34d248992accba5fad8aee26aaae14d2",
".git/objects/25/da24a692cfd7a2a0560d5f5b00df2508c83f67": "e4d53c73aa0c4b741dbc170eb04fcf44",
".git/HEAD": "cf7dd3ce51958c5f13fece957cc417fb",
".git/info/exclude": "036208b4a1ab4a235d75c181e685e5a3",
".git/logs/HEAD": "a1107bdd3ef48a52c5974c456b922469",
".git/logs/refs/heads/main": "99125f638cec8ac9eff26625e6fa522e",
".git/logs/refs/remotes/origin/main": "d87b59067e6f457003b979e248d03fa6",
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
".git/refs/heads/main": "a9f840a6316aee09fdefc8f6efd85c67",
".git/refs/remotes/origin/main": "a9f840a6316aee09fdefc8f6efd85c67",
".git/index": "9ecfeee516791257e2c6266c8644af5e",
".git/COMMIT_EDITMSG": "9411b812d060f3d8cab35f4ad150e2ad",
".git/FETCH_HEAD": "7f783cbffb925da701ea9412f701b66d",
"assets/AssetManifest.json": "c6e11b711bc74ec676f17504e79cdeca",
"assets/NOTICES": "12b7478628a768a7f340eeca53d224b6",
"assets/FontManifest.json": "05f264133a06f5afeacc91b8f6b574f5",
"assets/AssetManifest.bin.json": "0fd5e1231421bd7b4a449eec92543c56",
"assets/packages/cupertino_icons/assets/CupertinoIcons.ttf": "e986ebe42ef785b27164c36a9abc7818",
"assets/packages/flutter_map/lib/assets/flutter_map_logo.png": "208d63cc917af9713fc9572bd5c09362",
"assets/shaders/ink_sparkle.frag": "ecc85a2e95f5e9f53123dcaf8cb9b6ce",
"assets/AssetManifest.bin": "ff7ab579e6fbd9e55da8d66403d36680",
"assets/fonts/MaterialIcons-Regular.otf": "28f5d4a73578936382913044c99a065a",
"assets/assets/maps/uafsky.jpg": "b8b9f11b6e3928e9b0876bca9cfcd1ec",
"assets/assets/img/kaf.jpeg": "9cf42a6e5f1ecb2024d0de15e670e381",
"assets/assets/logo/logo-kaf.png": "f757f43a2642eca13a343942ccce9308",
"assets/assets/logo/kaf.png": "cc596a818ce298a4b55256cb1357f730",
"assets/assets/logo/logo-uiaa.png": "10566c0b26f04fa8479a066370fd4f3d",
"assets/assets/logo/uiaa-logo.png": "091f3dabe56e4946217d675f532bd849",
"assets/assets/mp3/wrongqr.mp3": "6f084016c32ab7385cbcaa64b95a0142",
"assets/assets/mp3/fighting.mp3": "7733d66870722e0d1ea865b750a1c6e2",
"assets/assets/mp3/start.mp3": "adb4958576d6e04f5a05fdb9dbd27bf4",
"assets/assets/mp3/writerecord.mp3": "efaa5043872e3d051b5c100c634a2356",
"assets/assets/mp3/retry.mp3": "9fa4d297914202d15eac5e3e2f58c631",
"assets/assets/fonts/Roboto-Regular.ttf": "327362a7c8d487ad3f7970cc8e2aba8d",
"assets/assets/fonts/YDYGO135.ttf": "e2692969ff5392368111433755a43a84",
"assets/assets/fonts/YDYGO125.ttf": "33e935854ee9b0261aa7e153d61e1bd2",
"assets/assets/fonts/OpenSans-Regular.ttf": "931aebd37b54b3e5df2fedfce1432d52",
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
