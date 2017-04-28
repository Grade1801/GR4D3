module.exports = (message, prefix) => {
  if (message.content.startsWith (prefix + `slap `)) {
  message.channel.sendMessage(` ${message.author} slaps ${message.content.substring(5)} with a roundhousekick! `);
  };
  
};
// tets huhu
