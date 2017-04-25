module.exports = (message) => {
  if (message.content.startsWith (`slap `)) {
  message.channel.sendMessage(` ${message.author} slaps ${message.content.substring(5)} with a roundhousekick! `);
  };
  
};
