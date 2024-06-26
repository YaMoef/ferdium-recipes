function _interopRequireDefault(obj) {
  return obj && obj.__esModule ? obj : { default: obj };
}

const _path = _interopRequireDefault(require('path'));

module.exports = Ferdium => {
  const getMessages = () => {
    let directMessages = 0;
    let indirectMessages = 0;
    const notificationElement = document.querySelector(
      '.yj-notifications-indicator-count',
    );
    const newMessagesElement = document.querySelector(
      '.yj-thread-list--new-messages-notice:not(.is-hidden) .yj-thread-list--new-message-text',
    );

    if (notificationElement) {
      directMessages = Ferdium.safeParseInt(notificationElement.textContent);
    }

    if (newMessagesElement) {
      indirectMessages = Ferdium.safeParseInt(
        newMessagesElement.textContent.match(/\d+/)[0],
      );
    }

    Ferdium.setBadge(directMessages, indirectMessages);
  };

  Ferdium.loop(getMessages);

  Ferdium.injectCSS(_path.default.join(__dirname, 'service.css'));
};
