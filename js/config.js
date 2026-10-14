// ============================================================
//  门户站点配置文件 —— 添加新网站只需编辑这个文件
//
//  如何添加一个新网站：
//  在对应分类的 sites 数组里加一行：
//    { name: "网站名", url: "https://...", desc: "一句话描述" }
//
//  可选字段：
//    icon: "https://.../logo.png"  自定义图标（不填则自动用首字母彩色图标）
//
//  如何添加新分类：
//  在 categories 数组里加一个 { name: "分类名", sites: [...] }
// ============================================================

const PORTAL_CONFIG = {
  // 门户标题和副标题
  title: "CX's",
  subtitle: "简洁 · 高效 · 一目了然",

  // 网站分类，按顺序显示
  categories: [
    {
      name: "CX",
      sites: [
        { name: "Blog", url: "https://blog.imcaoxuan.cn/", desc: "" },
        { name: "CanoKey", url: "https://canokey-console.imcaoxuan.cn/", desc: "" },
        { name: "IT Tools", url: "https://tools.imcaoxuan.cn/", desc: "" },
        { name: "MyIP", url: "https://myip.cxapi.top/", desc: "" },
        { name: "PairDrop", url: "https://pairdrop.imcaoxuan.cn/", desc: "" },
        { name: "Root CA", url: "files/root_ca.crt", desc: "" },
        { name: "SpeedTest", url: "https://speedtest.imcaoxuan.cn/", desc: "" },
      ]
    },
    {
      name: "IT",
      sites: [
        { name: "G", url: "https://imcaoxuan.github.io", desc: "" },
        { name: "阿里云", url: "https://www.aliyun.com/", desc: "" },
        { name: "aws", url: "https://aws.amazon.com/", desc: "" },
        { name: "CloudFlare", url: "https://www.cloudflare.com/", desc: "" },
        { name: "Gitecode", url: "https://gitcode.com", desc: "" },
        { name: "Gitee", url: "https://gitee.com", desc: "" },
        { name: "Github", url: "https://github.com", desc: "" },
        { name: "Hugging Face", url: "https://huggingface.co", desc: "" },
        { name: "力扣", url: "https://leetcode.cn", desc: "" },
        { name: "Docker Hub", url: "https://hub.docker.com", desc: "" },
        { name: "腾讯云", url: "https://cloud.tencent.com", desc: "" },
        { name: "vultr", url: "https://www.vultr.com", desc: "" },
        { name: "Intel", url: "https://www.intel.cn", desc: "" },
        { name: "OpenPGP Keys", url: "https://keys.openpgp.org", desc: "" },
        { name: "TeamViewer", url: "https://www.teamviewer.com", desc: "" },
        { name: "向日葵", url: "https://www.oray.com", desc: "" },

      ]
    },
    {
      name: "DEV",
      sites: [
        { name: "Jetbrains", url: "https://jetbrains.com", desc: "" },
      ]
    },
    {
      name: "AI",
      sites: [
        { name: "ChatGPT", url: "https://chatgpt.com", desc: "" },
        { name: "Claude", url: "https://claude.ai", desc: "" },
        { name: "DeepSeek", url: "https://www.deepseek.com", desc: "" },
        { name: "豆包", url: "https://www.doubao.com", desc: "" },
        { name: "Kimi", url: "https://www.kimi.com", desc: "" },
        { name: "MiniMax", url: "https://agent.minimax.cn", desc: "" },
      ]
    },
    {
      name: "SNS",
      sites: [
        { name: "Discord", url: "https://discord.com", desc: "" },
        { name: "Faceboook", url: "https://www.facebook.com", desc: "" },
        { name: "LinkedIn", url: "https://www.linkedin.com", desc: "" },
      ]
    },
    {
      name: "TOOLS",
      sites: [
        { name: "IPIP", url: "https://www.ipip.net", desc: "" },
      ]
    },
    {
      name: "MEDIA",
      sites: [
        { name: "哔哩哔哩", url: "https://www.bilibili.com", desc: "" },
        { name: "虎牙直播", url: "https://www.huya.com", desc: "" },
      ]
    },
    {
      name: "LIFE",
      sites: [
        { name: "Amazon", url: "https://www.amazon.com", desc: "" },
      ]
    },
    {
      name: "TRAVEL",
      sites: [
        { name: "Mobal", url: "https://www.mobal.com.cn", desc: "" },
      ]
    },
    {
      name: "LEARN",
      sites: [
        { name: "多邻国", url: "https://www.duolingo.com", desc: "" },
        { name: "ORCID", url: "https://orcid.org", desc: "" },
        { name: "中国教育考试网", url: "https://www.neea.edu.cn", desc: "" },
      ]
    },
    {
      name: "GAME",
      sites: [
        { name: "Stream", url: "https://store.steampowered.com", desc: "" },
        { name: "RiotGames", url: "https://www.riotgames.com", desc: "" },
      ]
    },
    {
      name: "FIN",
      sites: [
        { name: "Binance", url: "https://binance.com", desc: "" },
        { name: "Tether", url: "https://tether.io", desc: "" },
        { name: "Paypal", url: "https://www.paypal.com", desc: "" },
      ]
    },






  ]
};
