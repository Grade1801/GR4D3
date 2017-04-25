module.exports = (message) => {
  if (message.content === `ping`) {
  message.channel.sendMessage(`pong to ${message.author} at ${message.channel}`);
  };
  
};
