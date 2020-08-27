// полифилл CustomEven для IE11
(function () {
  if (typeof window.CustomEvent === "function") return false;
  function CustomEvent(event, params) {
    params = params || {
      bubbles: false,
      cancelable: false,
      detail: null,
    };
    var evt = document.createEvent("CustomEvent");
    evt.initCustomEvent(
      event,
      params.bubbles,
      params.cancelable,
      params.detail
    );
    return evt;
  }
  window.CustomEvent = CustomEvent;
})();

function $modal(options) {
  var _elemModal,
    _eventShowModal,
    _eventHideModal,
    _hiding = false,
    _destroyed = false,
    _animationSpeed = 200;

  function _createModal(options) {
    var elemModal = document.createElement("div"),
      modalTemplate =
        '<div class="modal__backdrop" data-dismiss="modal"><div class="modal__content"><span class="modal__btn-close" data-dismiss="modal" title="Закрыть">×</span><div class="modal__body" data-modal="content">{{content}}</div></div>',
      modalHTML;

    elemModal.classList.add("modal");
    modalHTML = modalTemplate.replace();
    modalHTML = modalHTML.replace("{{content}}", options.content || "");

    elemModal.innerHTML = modalHTML;
    document.body.appendChild(elemModal);
    return elemModal;
  }

  function _showModal() {
    if (!_destroyed && !_hiding) {
      _elemModal.classList.add("modal__show");
      document.dispatchEvent(_eventShowModal);
    }
  }

  function _hideModal() {
    _hiding = true;
    _elemModal.classList.remove("modal__show");
    _elemModal.classList.add("modal__hiding");
    setTimeout(function () {
      _elemModal.classList.remove("modal__hiding");
      _hiding = false;
    }, _animationSpeed);
    document.dispatchEvent(_eventHideModal);
  }

  function _handlerCloseModal(e) {
    if (e.target.dataset.dismiss === "modal") {
      _hideModal();
    }
  }

  _elemModal = _createModal(options || {});

  _elemModal.addEventListener("click", _handlerCloseModal);
  _eventShowModal = new CustomEvent("show.modal", { detail: _elemModal });
  _eventHideModal = new CustomEvent("hide.modal", { detail: _elemModal });

  return {
    show: _showModal,
    hide: _hideModal,
    destroy: function () {
      _elemModal.parentElement.removeChild(_elemModal),
        _elemModal.removeEventListener("click", _handlerCloseModal),
        (destroyed = true);
    },
    setContent: function (html) {
      _elemModal.querySelector('[data-modal="content"]').innerHTML = html;
    },
    setTitle: function (text) {
      _elemModal.querySelector('[data-modal="title"]').innerHTML = text;
    },
  };
}

(function () {
  var elemTarget;
  // создаём модальное окно
  var modal = $modal({
    content:
      '<img src="" alt=""  style="display: block; height: auto; max-width: 100%;">',
  });
  // при клике на документ
  document.addEventListener("click", function (e) {
    // если мы кликнули на измобржение расположенное в .img__items, то...
    if (e.target.matches(".image")) {
      elemTarget = e.target;
      // устанавливаем модальному окну title
      modal.setContent(
        '<div class="modal__baner"><img class="baner__img" src="' +
          e.target.src +
          '" style="display: block; height: auto; max-width: 100%; margin: 0 auto;"></div><div class="modal__header"><div class="modal__header__title"><span>celebrationscakes8<span class="last-leter">347</span></span><a  href="https://www.instagram.com/wix/"><img src="https://static.wixstatic.com/media/01c3aff52f2a4dffa526d7a9843d46ea.png/v1/fill/w_19,h_19,al_c,q_85,usm_0.66_1.00_0.01/01c3aff52f2a4dffa526d7a9843d46ea.webp"></a></div><div class="modal__header__text" "><span class="user-name">celebrationscakes8<span class="last-leter">347</span></span> <span class="link">@wix: #wix, #website, #freewebsite, #websitetemplate, #wix.com</span></div></div>' +
          "</div>"
      );
      modal.show();
    } else if (e.target.dataset.handler === "modalHandlerCancel") {
      modal.hide();
    } else if (e.target.dataset.handler === "modalHandlerDelete") {
      elemTarget.parentElement.parentElement.removeChild(
        elemTarget.parentElement
      );
      modal.hide();
    }
  });
})();
