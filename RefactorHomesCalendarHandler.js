Zammad.Handlers.Homes.HomesCalendarHandler = {
  hasBeenShow: false,
  init: () => {
    this.initEvents();
  },
  initEvents: () => {
    const checkBloqued = $('.js-check-if-is-blocked[value="true"]');

    this.setDaysHoverEvent();
    this.setDaysClickEvent();
    this.setTimesHoverEvent();
    this.setTimesClickEvent();
    this.setBlockButtonEvent();
    this.setDesBlockButtonEvent();
    this.setTimeEvents();
    this.closeMagnificButton();

    checkBloqued.parent().addClass('selected');
  },
  setDaysHoverEvent: () => {
    $('.js-day-button').hover(() => {
      const btn = $(this);
      const index = btn.data('id');

      $(`.js-times-container[data-day="${index}"].time-calendar`).addClass('active');
      btn.addClass('active');
    }, () => {
      const btn = $(this);
      const index = btn.data('id');

      $(`.js-times-container[data-day="${index}"].time-calendar`).removeClass('active');
      btn.removeClass('active');
    });
  },
  setDaysClickEvent: () => {
    $('.js-day-button').on('click', () => {
      const btn = $(this);
      const index = btn.data('id');
      const buttonHasClass = btn.hasClass('is-blocked');

      $(`.js-times-container[data-day="${index}"].time-calendar`).toggleClass('selected');
      btn.toggleClass('is-blocked');

      $(`.js-times-container[data-day="${index}"].js-change-block`).prop('checked', !buttonHasClass);
      $(`.js-times-container[data-day="${index}"].js-change-time`).prop('checked', !buttonHasClass);
    });
  },
  setTimesHoverEvent: () => {
    $('.js-times-button').hover(() => {
      const btn = $(this);
      const index = btn.data('time');

      $(`.js-time-button[data-time="${index}"]`).addClass('active');
      btn.addClass('active');
    }, () => {
      const btn = $(this);
      const index = btn.data('time');

      $(`.js-time-button[data-time="${index}"]`).removeClass('active');
      btn.removeClass('active');
    });
  },
  setTimesClickEvent: () => {
    $('.js-times-button').on('click', () => {
      const btn = $(this);
      const index = btn.data('time');
      const buttonHasClass = btn.hasClass('is-blocked');

      $(`.js-time-button[data-time="${index}"]`).toggleClass('selected');
      btn.toggleClass('is-blocked');

      $(`.js-time-button[data-time="${index}"] .js-change-time`).prop('checked', !buttonHasClass);
    });
  },
  setBlockButtonEvent: () => {
    $('.js-block-btn').on('click', () => {
      const $btn = $(this);
      const id = $btn.data('day');

      $(`.js-day-button[data-id=$(id)]`).removeClass('active');
      $(`.js-day-button[data-id=$(id)]`).addClass('blocked');
      $btn.hide();
      $('.js-desblock-btn').show();
      $(`.js-times-container[data-day=$(id)] .js-change-time`).each((ii, checkBox) => {
        $(checkBox).prop('checked', true);
        $(checkBox).parent().addClass('selected');
      });
      $(`.js-times-container[data-day=$(id)] .js-change-block`).prop('checked', true);
      if($('.js-day-button.complete, .js-day-button.blocked').length == 7){ $('.js-finish-btn').show() }
    });
  },
  setDesBlockButtonEvent: () => {
    $('.js-desblock-btn').on('click', () => {
      const $btn = $(this);
      const id = $btn.data('day');

      $(`.js-day-button[data-id=$(id)]`).addClass('active');
      $(`.js-day-button[data-id=$(id)]`).removeClass('blocked');
	  $btn.hide();
      $('.js-block-btn').show();
      $(`.js-times-container[data-day=$(id)] .js-change-time`).each((ii, checkBox) => {
        $(checkBox).prop('checked', false);
        $(checkBox).parent().removeClass('selected');
      });
      $(`'.js-times-container[data-day=$(id)] .js-change-block'`).prop('checked', false);
    })
  },
  setFinishButtonEvent: () => {
    $('.js-finish-btn').on('click', () => {
      const $btn = $(this);
      const id = $btn.data('day');

      $.magnificPopup.open({
        items: {
          src: '#calendar-finish-modal',
          type: 'inline',
          midClick: true,
        }
      });
    })
  },
  setTimeEvents: () => {
    let self = this;

    $('.js-change-time').change(() => {
      let $checkbox = $(this);
      const time = $checkbox.parent().data('time');
      const day = $checkbox.parent().parent().data('day');
      if($checkbox.is(':checked')){
        $checkbox.parent().addClass('selected');
      } else {
        $checkbox.parent().removeClass('selected');
      }
      self.verifyDaysAndTimesMarks(day, time);
    });
  },
  showPopupHelper: () => {
    if(!this.hasBeenShow) {
      $.magnificPopup.open({
        items: {
          src: '#calendar-help-popup',
          type: 'inline'
        }
      });
      this.hasBeenShow = true;
    }
  },
  markAsActiveTheNextUnCompletedDay: () => {
    const zeroDays = 0;
    const uncompletedDays = $('.js-day-button:not(.complete)');

    if(uncompletedDays.length > zeroDays) { $(uncompletedDays[0].click()) };
  },
  verifyDaysAndTimesMarks: (day, time) => {
    const daySize = $(`.js-times-container[data-day = "$(day)"] .time-calendar`).length;
    const timeSize = $(`.js-time-button[data-time = "$(time)"]`).length;
    const daySizeSelected = $(`.js-times-container[data-day = "$(day)"] .time-calendar.selected`).length;
    const timeSizeSelected = $(`.js-time-button[data-time = "$(time)"].selected`).length;

    $(`.js-day-button[data-id="$(day)"]`).removeClass('is-blocked');
    $(`.js-times-container[data-day = $(day)] .js-change-block`).prop('checked', false);
    if(daySize == daySizeSelected){
      $(`.js-day-button[data-id = "$(day)"]`).addClass('is-blocked');
      $(`.js-times-container[data-day = $(day)] .js-change-block`).prop('checked', true);
    }

    $(`.js-times-button[data-time = "$(time)"]`).removeClass('is-blocked');
    if(timeSize == timeSizeSelected){ $(`.js-times-button[data-time = "$(time)"]`).addClass('is-blocked') };
  },
  closeMagnificButton: () => {
    const textChange = $('.js-close-popup');
    const textChangeParent = $('.js-close-popup').parent();

    $('.js-close-popup').click(() => {
      textChange.removeClass('white');
      textChangeParent.parent().css('z-index', 1);
      $.magnificPopup.close();
    });
  },
  initSlider: () => {
    const owl = $('#owl-carousel-calendar');

    setTimeout(() => {
      owl.trigger('destroy.owl.carousel');
      if($(window.width() >= 768)){ owl.removeClass('owl-carousel') };
    }, 1000);
  },
};
