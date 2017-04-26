module.exports = (message, prefix) => {
  if (message.content.startsWith (prefix + `ping`)) {
  message.channel.sendMessage(`pong to ${message.author} at ${message.channel}`);
  };
  
};
