<template>
  <!-- 加载动画 -->
  <div class="loading" v-if="$props.show">
    <div class="ry-loading">
      <svg aria-hidden="true" style="position: absolute; width: 0px; height: 0px; overflow: hidden;">
        <symbol id="icon-loading" viewBox="0 0 1024 1024">
          <path
            d="M512.606821 958.898283c-246.319012 0-446.698738-200.379727-446.698738-446.698738S266.287809 65.479317 512.606821 65.479317c17.73185 0 32.117488 14.385639 32.117488 32.117488s-14.385639 32.117488-32.117488 32.117488c-210.897268 0-382.463762 171.58696-382.463762 382.484228s171.566494 382.463762 382.463762 382.463762 382.484228-171.566494 382.484228-382.463762c0-106.013499-42.384319-204.603935-119.332852-277.558503-12.859889-12.211113-13.403265-32.536021-1.212618-45.416376 12.190647-12.901845 32.536021-13.403265 45.416376-1.212618 89.870844 85.229127 139.365094 200.35926 139.365094 324.187497C959.327048 758.518556 758.925832 958.898283 512.606821 958.898283z"></path>
        </symbol>
        <symbol id="icon-loading1" viewBox="0 0 1024 1024">
          <path
            d="M71.037275 589.62282 343.25474 771.449571 293.661553 848.937992C354.738377 888.720061 426.716444 912.090533 504.085399 912.090533 673.24879 912.090533 817.384122 802.032783 874.652978 647.070874 894.693344 592.803593 926.172549 579.587703 953.425655 587.367905 917.541154 798.956542 733.862684 960.235198 512.059733 960.235198 291.033308 960.235198 107.832701 800.106399 71.037275 589.62282ZM954.396313 443.142974 680.356997 244.277431 723.842501 171.478038C663.527271 133.726886 593.027591 111.59587 517.361022 111.59587 343.971534 111.59587 196.745027 225.775185 141.641486 385.202123 131.800502 402.718777 103.188473 416.890393 75.382838 412.395497 120.749927 212.917692 298.843376 63.884268 512.059733 63.884268 736.087733 63.884268 921.169924 228.418363 954.396313 443.142974Z"></path>
        </symbol>
        <symbol id="icon-loading2" viewBox="0 0 1024 1024">
          <path
            d="M512 1024C229.234 1024 0 794.766 0 512 0 229.234 229.234 0 512 0c282.766 0 512 229.234 512 512 0 282.766-229.234 512-512 512zM617.16 98.93c5.489 13.369 8.618 27.96 8.618 43.292C625.778 205.056 574.834 256 512 256s-113.778-50.944-113.778-113.778c0-15.331 3.13-29.923 8.647-43.292C222.151 145.835 85.333 312.718 85.333 512c0 235.634 191.033 426.667 426.667 426.667S938.667 747.634 938.667 512c0-199.282-136.818-366.165-321.508-413.07z"></path>
        </symbol>
      </svg>
      <!-- 蒙版 -->
      <div class="ry-mask"></div>
      <span class="ry-icon" :style="'color:  ' + $props.style_co">
        <svg class="icon" aria-hidden="true">
            <use xmlns:xlink="http://www.w3.org/1999/xlink" :xlink:href="'#' + computeIcon($props.icon)"></use>
        </svg>
      </span>
      <span class="ry-text font-16"  :style="'color:  ' + $props.style_co" v-text="$props.loadingText"></span>
    </div>
  </div>
</template>

<script>
  export default {
    name: "ry-loading",
    props: {
      show: {
        default: true
      },
      icon: {
        default: 0,
      },
      loadingText: {
        default: "加载中...",
      },
      style_co: {
        default: '#63ffde'
      }
    },
    methods: {
      computeIcon(icon_number) {
        let icon_idname = "icon-loading";

        switch (icon_number) {
          case 0:
            icon_idname = "icon-loading";
            break;
          case 1:
            icon_idname = "icon-loading1";
            break;
          case 2:
            icon_idname = "icon-loading2";
            break;
          default:
            icon_idname = "icon-loading";
        }

        return icon_idname;
      }
    }
  }
</script>

<style scoped lang="scss">

  $full-height: 100%;
  $position-abs: absolute;
  $icon-color: #63ffde;
  $icontext-color: #63ffde;

  .loading {
    position: inherit;
    height: $full-height;
    .ry-loading {
      position: $position-abs;
      z-index: 1;
      left: 50%;
      top: 50%;
      -webkit-transform: translate(-50%, -50%);
      -moz-transform: translate(-50%, -50%);
      -ms-transform: translate(-50%, -50%);
      -o-transform: translate(-50%, -50%);
      transform: translate(-50%, -50%);
      .ry-icon {
        display: block;
        color: $icon-color;
        .icon {
          width: 56px;
          height: 56px;
          fill: currentColor;
          overflow: hidden;
          animation: ryLoading 1.5s infinite cubic-bezier(0.66, 0.07, 0.43, 0.96) backwards;
          perspective: 500px;
        }
      }
      .ry-text {
        display: block;
        color: $icontext-color;
      }
    }
  }

  @keyframes ryJumpLoading {
    0% {
      margin-top: 8px;
      -webkit-transform: scale(1, 0.9);
      -moz-transform: scale(1, 0.9);
      -ms-transform: scale(1, 0.9);
      -o-transform: scale(1, 0.9);
      transform: scale(1, 0.9);
    }
    100% {
      margin-top: 0;
      -webkit-transform: scale(1, 1);
      -moz-transform: scale(1, 1);
      -ms-transform: scale(1, 1);
      -o-transform: scale(1, 1);
      transform: scale(1, 1);
    }
  }

  @keyframes ryLoading {
    0% {
      -webkit-transform: rotateZ(0);
      -moz-transform: rotateZ(0);
      -ms-transform: rotateZ(0);
      -o-transform: rotateZ(0);
      transform: rotateZ(0);
    }
    100% {
      -webkit-transform: rotateZ(360deg);
      -moz-transform: rotateZ(360deg);
      -ms-transform: rotateZ(360deg);
      -o-transform: rotateZ(360deg);
      transform: rotateZ(360deg);
    }
  }

  @media screen and (max-width: 1679px) {
    .icon {
      width: 52px !important;
      height: 52px !important;
    }
  }

  @media screen and (max-width: 1439px) {
    .icon {
      width: 48px !important;
      height: 48px !important;
    }
  }
  @media screen and (max-width: 1365px) {
    .icon {
      width: 44px !important;
      height: 44px !important;
    }
  }
  @media screen and (max-width: 1279px) {
    .icon {
      width: 40px !important;
      height: 40px !important;
    }
  }
  @media screen and (max-width: 1099px) {
    .icon {
      width: 36px !important;
      height: 36px !important;
    }
  }
</style>
