module.exports = {
  config: {
    name: "uptime",
    aliases: ["up", "upt"],
    version: "1.0",
    author: "MR.AYAN",
    role: 0,
    shortDescription: {
      en: "Displays the uptime of the bot."
    },
    longDescription: {
      en: "Displays the amount of time that the bot has been running for."
    },
    category: "System",
    guide: {
      en: "Use {p}uptime to display the uptime of the bot."
    }
  },
  onStart: async function ({ api, event, args }) {
    const uptime = process.uptime();
    const seconds = Math.floor(uptime % 60);
    const minutes = Math.floor((uptime / 60) % 60);
    const hours = Math.floor((uptime / (60 * 60)) % 24);
    const days = Math.floor(uptime / (60 * 60 * 24));
    const uptimeString = `\n${hours} 𝒉𝒐𝒖𝒓𝒔\n${minutes} 𝒎𝒊𝒏𝒖𝒕𝒆𝒔\n${seconds} 𝒔𝒆𝒄𝒐𝒏𝒅 `;
    api.sendMessage(`𝑯𝒆𝒍𝒍𝒐 𝑴𝒂𝒔𝒕𝒆𝒓\n\n𝑻𝒉𝒆 𝑩𝒐𝒕 𝑯𝒂𝒔 𝑩𝒆𝒆𝒏 𝑹𝒖𝒏𝒏𝒊𝒏𝒈 𝑭𝒐𝒓 ${uptimeString}.`, event.threadID);
  }
}; 
