var credentials = require("./credentials.js");
var coins = require("./coins.js");

var currentCoin = "BTC";

module.exports = {
	cookiePassword: "0x00000fdd334285b4e9193a559fea692260bad1d281bf",
	demoSite: false,
	coin: currentCoin,

	rpcBlacklist:[
		"stop",
		"savemempool",
		"addnode",
		"disconnectnode",
		"dumpprivkey",
		"dumpwallet",
		"setban",
		"clearbanned",
		"setnetworkactive",
		"lockunspent",
		"move",
		"removeprunedfunds",
		"rescanblockchain",
		"encryptwallet",
		"backupwallet",
		"importwallet",
		"walletlock",
		"walletpassphrase",
		"walletpassphrasechange",
		"verifychain",
		"pruneblockchain"
	],

	site: {
		blockTxPageSize:100,
		blockTxMaxInput:25,
		browseBlocksPageSize:20
	},

	credentials: credentials,

	// Edit "ipWhitelistForRpcCommands" regex to limit access to RPC Browser / Terminal to matching IPs
	ipWhitelistForRpcCommands:/^(127\.0\.0\.1)?(\:\:1)?$/,

	siteTools:[
		{name:"Node Status", url:"/node-status", desc:"Summary of this node: version, network, uptime, etc.", fontawesome:"fas fa-broadcast-tower"},
		{name:"Peers", url:"/peers", desc:"Detailed info about the peers connected to this node.", fontawesome:"fas fa-sitemap"},

		{name:"Browse Blocks", url:"/blocks", desc:"Browse all blocks in the blockchain.", fontawesome:"fas fa-cubes"},
		{name:"Transaction Stats", url:"/tx-stats", desc:"See graphs of total transaction volume and transaction rates.", fontawesome:"fas fa-chart-bar"},

		{name:"Mempool Summary", url:"/mempool-summary", desc:"Detailed summary of the current mempool for this node.", fontawesome:"fas fa-clipboard-list"},
		{name:"Unconfirmed Transactions", url:"/unconfirmed-tx", desc:"Browse unconfirmed/pending transactions.", fontawesome:"fas fa-unlock-alt"},

		// {name:"RPC Browser", url:"/rpc-browser", desc:"Browse the RPC functionality of this node. See docs and execute commands.", fontawesome:"fas fa-book"},
		// {name:"RPC Terminal", url:"/rpc-terminal", desc:"Directly execute RPCs against this node.", fontawesome:"fas fa-terminal"},
		
		{name:(coins[currentCoin].name + " Fun"), url:"/fun", desc:"See fun/interesting historical blockchain data.", fontawesome:"fas fa-certificate"}
	],

	donationAddresses:{
		coins:["BTC"],

		"BTC":{address:"3CHGLadfbcKrM1sS5uYtASaq75VAuMSMpb", urlPrefix:"bitcoin:"},
		// "LTC":{address:"ME4pXiXuWfEi1ANBDo9irUJVcZBhsTx14i", urlPrefix:"litecoin:"}
	},

	headerDropdownLinks: {
		title:"Rooms",
		links:[
			{name: "#bitcoin:fabric.pub", url:"https://chat.fabric.pub/#/room/#bitcoin:fabric.pub", imgUrl:"/img/logo/btc.svg"},
			{name: "#lightning:fabric.pub", url:"https://chat.fabric.pub/#/room/#lightning:fabric.pub", imgUrl:"/img/logo/lightning.svg"},
		]
	}
};
