import Link from 'next/link';
import Layout from '../components/Layout';
import { titlePage } from './../lib/const';

const titleView = `Home ${titlePage}`

export default () => (
  <Layout title={titleView}>
    <div className="home-top" id="top"
      style={{ height: '762px' }}
    >
      <svg
        style={{ display: 'none' }}
      >
        <symbol id="desarrollo-deportivo" xmlns="http://www.w3.org/2000/svg" width="105.066" viewBox="0 0 105.066 80.19">
          <circle cx="86.503" cy="18.562" r="18.562" fill="#E91D00"></circle>
          <path d="M86.296 10.836c.458 0 .687.23.687.687V26.17c0 .436-.23.688-.687.688h-2.54c-.436 0-.687-.252-.687-.687V16.1c0-.457-.23-.687-.69-.687H81.4c-.436 0-.688-.252-.688-.687V13.49c0-.39.138-.64.458-.823l2.93-1.763c.092-.046.184-.068.298-.068h1.9zM44.19 41.37l9.813 1.063 2.5-3.562s-.938-5.75 5.25-6.624 15.507.4 17.57 4.93 3.46 10.225 3.46 10.225.02 1.79-.904 2.435c-.786.55-1.87.84-3.19.035l-4.437-10.25-3.062-.875s-1.624.44-.75 2.44 4.063 9.81 4.063 9.81 1.25 2.875-.375 4.125-6.75 6.125-6.75 6.125l10.5 12.438s1.812 2.875-.188 4.812-4.812.312-6.875-2-9.438-11.25-9.438-11.25l-6.312 11.75s-1.688 3.688-4.625 2.875-3.5-3-1.812-6.562l7.375-13.938s1.625-2.812 2.625-3.75l3.875-2.562-3.375-8.125-1.562 2.5s-1.5 1.625-4 1.125-10.188-1.812-10.188-1.812-2.125-1.125-1.938-2.688.5-2.93 2.75-2.687z" fill="#FFF"></path>
          <circle cx="59.828" cy="22.906" r="6.027" fill="#FFF"></circle>
          <circle cx="38.379" cy="26.406" r="6.027" fill="#FFF"></circle>
          <path d="M9.17 38.433l7.083-7.5s1.583-2.167 3.917-1.25 5.167 1.917 5.167 1.917 6.833.024 8.917 2.345c2.083 2.32 2.75 4.655 2.25 6.82l-.833 3.168 1.418 3.083 9.5 3s1.667.417.75 3.333c0 0-.833 2-3.833 1.416-3-.583-10.167-2.75-10.167-2.75s-1.75-.333-2-2.333-.333-3.167-.333-3.167l-5 4.833s-1.083 1.416.167 2.75c1.25 1.332 6.583 7.332 6.583 7.332s.833 1 .333 4.083c-.5 3.083-2.667 11.75-2.667 11.75s-.75 3.083-3.666 2.917-4-2.75-2.833-6.667c1.168-3.917 2.584-8.75 2.584-8.75l-2.5-1.917-17.417 9.835S2.92 74.85.92 72.433c0 0-3.167-3.333 2.25-6.417l13.333-7.333L13.67 52.1s-2.167-3.25.833-5.667l9.303-9.5-4.22-.667-6 5.5s-1.332 2.917-4.25 2c0 0-3.776-1.51-.166-5.333z" fill="#FFF"></path>
        </symbol>
        <symbol id="reforms" xmlns="http://www.w3.org/2000/svg" width="94.979" viewBox="0 0 94.979 81.625">
          <circle cx="76.417" cy="18.562" r="18.562" fill="#E91D00"></circle>
          <path d="M80.085 22.92c.458 0 .688.23.688.688v2.563c0 .46-.23.688-.688.688h-9.75c-.435 0-.687-.252-.687-.687v-1.968c0-5.264 6.73-6.752 7.095-8.56.138-.688-.23-1.282-1.12-1.282-1.077 0-1.604.595-1.764 1.533-.07.458-.298.664-.756.572l-2.61-.572c-.41-.09-.617-.343-.594-.755.137-1.648 1.007-4.715 5.722-4.715 5.127 0 5.31 4.05 5.287 4.737 0 4.486-5.997 5.196-6.8 7.508-.045.16.024.252.207.252h5.768zM18.75 78.79c0 1.566-1.27 2.835-2.835 2.835H2.835C1.27 81.625 0 80.355 0 78.79V65.335C0 63.77 1.27 62.5 2.835 62.5h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM44.5 78.79c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V65.335c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM71.5 78.79c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V65.335c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835V78.79zM45.25 30.915c0 1.566-1.27 2.835-2.835 2.835h-13.08c-1.566 0-2.835-1.27-2.835-2.835V17.46c0-1.566 1.27-2.835 2.835-2.835h13.08c1.567 0 2.836 1.27 2.836 2.835v13.455zM63.312 56.875c-1.38 0-2.5-1.12-2.5-2.5v-7.5h-50v7.5c0 1.38-1.12 2.5-2.5 2.5s-2.5-1.12-2.5-2.5v-10c0-1.38 1.12-2.5 2.5-2.5h55c1.38 0 2.5 1.12 2.5 2.5v10c0 1.38-1.12 2.5-2.5 2.5z" fill="#FFF"></path>
          <path d="M35.812 56.875c-1.38 0-2.5-1.12-2.5-2.5v-15c0-1.38 1.12-2.5 2.5-2.5s2.5 1.12 2.5 2.5v15c0 1.38-1.12 2.5-2.5 2.5z" fill="#FFF"></path>
        </symbol>
        <symbol id="infraestructure" xmlns="http://www.w3.org/2000/svg" width="88.116" viewBox="0 0 88.116 86.583">
          <path d="M13.783 43.167h15.083s3.688 5.75 9.354 5.833c0 0 5.21-.103 7.938-2.062 2.438-1.75 3.958-3.77 3.958-3.77H64.7L71.533 81H57.7l-1.5-12.833-32.833.25L21.72 81H7.616l6.167-37.833z" fill="#FFF"></path>
          <path fill="#FFF" d="M25.033 70.667H53.7L55.116 81H24.2M64.116 40.417L60.45 13.333h-8.667v8.917l-25-.167.417-8.75h-9.333L14.2 40.417h14.75s2.458-5.833 10.958-5.667 10.375 5.667 10.375 5.667h13.833z"></path>
          <path fill="#FFF" d="M29.616 13.333h19.917v6.833H29.616zM32.24 40.417s3.168-4.25 8.668-3.5 6 3.5 6 3.5H32.24zM31.783 43.167h15.125S44.825 46.584 39.575 47s-7.792-3.833-7.792-3.833z"></path>
          <path d="M78.702 86.583H0L13.688 7.917H66.4l12.302 78.666zm-75.136-3h71.63L63.833 10.917H16.21L3.567 83.583z" fill="#FFF"></path>
          <circle cx="69.554" cy="18.562" r="18.562" fill="#E91D00"></circle>
          <path d="M62.86 15.893c-.41-.09-.617-.343-.595-.755.138-1.648 1.007-4.715 5.722-4.715 3.686 0 5.448 2.357 5.333 5.013-.09 1.808-.938 2.884-1.625 3.296-.16.068-.16.16 0 .23.687.41 1.534 1.487 1.625 3.295.115 2.655-1.647 5.013-5.333 5.013-4.715 0-5.584-3.067-5.722-4.715-.022-.412.184-.664.595-.756l2.61-.573c.457-.09.686.115.755.572.16.937.687 1.533 1.762 1.533.916 0 1.625-.893 1.145-1.83-.343-.643-1.145-1.054-2.243-1.19-.458-.047-.688-.253-.688-.688v-1.557c0-.435.23-.64.687-.687 1.098-.137 1.9-.55 2.242-1.19.504-.937-.23-1.83-1.145-1.83-1.075 0-1.602.595-1.762 1.533-.07.458-.298.664-.756.572l-2.61-.572z" fill="#FFF"></path>
        </symbol>
        <symbol id="institutional" xmlns="http://www.w3.org/2000/svg" width="103.75" viewBox="0 0 103.75 85.089">
          <path d="M38.625 83.25s3.383-2.562 3.383-4.125.554-2.125.554-2.125 3.98 2.923 2.5 6.25c-1.25 2.812-5.187 2.062-6.437 0zM34.158 73.413c1.144-1.07 2.938-1.008 4.007.136l.68.777c1.068 1.144 1.007 2.938-.137 4.007l-2.223 2.117c-1.144 1.07-2.938 1.01-4.007-.135l-.678-.778c-1.07-1.144-1.008-2.938.136-4.007l2.222-2.117zM33.25 15.125s17.125-.375 21.75-2.25 5.5-2.75 5.5-2.75l22.25 22.25s-.625 7.125-3.625 12-5.75 7.375-5.75 7.375L45 23.375s-12.25.5-15.625-.25-5.375-8.875 3.875-8z" fill="#FFF"></path>
          <path d="M21.875 11.125l3.5 2.375s-2.625 3.875-1.75 8.375 7 5.25 9.625 5.375 11.125 0 11.125 0L75.5 58.875s1.75 4 0 5.625-4.125 1.875-8.375-2-11.75-12.875-11.75-12.875-2.25-2-3.5-.25 1.75 5.25 6 9.375 13 12.5 13 12.5 1.625 3.485.125 5.43-4.75 1.57-8-1.68-15.625-16.5-15.625-16.5-2.5-2.625-4.125-.5 4.375 6.5 6.5 8.75S59 76 59 76s1.375 3.125-.375 5S53 81.75 50 79 37.125 66.25 37.125 66.25s0-3-2.125-4.125S32.125 61 32.125 61s.625-5.875-1.75-7.75-8.5-.625-8.5-.625-.875-6.45-5.25-6.1-6.25 3.6-6.25 3.6l-2-5.625L1 36.75s-2.25-2.25 0-4.375 20.875-21.25 20.875-21.25z" fill="#FFF"></path>
          <circle cx="85.188" cy="18.562" r="18.562" fill="#E91D00"></circle>
          <path d="M23.61 55.258c1.143-1.07 2.937-1.008 4.006.136l.68.778c1.068 1.144 1.007 2.938-.137 4.007l-6.278 6.438c-1.144 1.07-2.938 1.008-4.007-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l6.277-6.44zM28.617 64.74c1.144-1.068 2.938-1.007 4.007.137l.68.778c1.068 1.144 1.007 2.938-.137 4.007L29.07 73.7c-1.145 1.07-2.94 1.008-4.008-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l4.097-4.04zM13.533 51.122c1.144-1.07 2.938-1.008 4.007.136l.68.778c1.068 1.144 1.007 2.938-.137 4.007L15.07 58.7c-1.145 1.07-2.94 1.008-4.008-.136l-.68-.778c-1.068-1.144-1.007-2.938.137-4.007l3.013-2.658zM89.824 20.678c0 .435-.23.687-.687.687h-.274c-.436 0-.688.23-.688.687v4.12c0 .435-.23.687-.687.687h-2.563c-.435 0-.687-.253-.687-.688v-4.12c0-.458-.23-.687-.687-.687h-5.79c-.435 0-.687-.252-.687-.687v-3.204c0-.023.07-.206.138-.458l1.97-3.914c.183-.366.366-.55.777-.55h2.52c.502 0 .8.32.57.778l-1.922 3.846c-.046.16 0 .252.183.252h2.243c.46 0 .688-.252.688-.687v-5.676c0-.458.252-.687.687-.687h2.563c.458 0 .687.23.687.687v5.677c0 .436.252.688.688.688h.274c.458 0 .687.23.687.687v2.563z" fill="#FFF"></path>
        </symbol>
        <symbol id="fpf" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" width="80" viewBox="0 0 89.279 112.737">
          <path d="M82.215 82.048C76.83 88.253 71.092 92.4 59.475 98.48l-.882.462c-5.08 2.656-5.08 2.656-12.085 6.748l-1.173.685-.696.407-.7-.407-1.17-.685c-7.01-4.092-7.01-4.092-12.09-6.748l-.88-.462C18.18 92.4 12.44 88.253 7.06 82.048c-3.475-4.005-3.22-10.954-3.182-11.65V6.185l1.41-.152c.2-.023 19.99-2.283 38.39-2.283.32 0 .64 0 .96.002.32 0 .64-.003.957-.003 18.4 0 38.193 2.26 38.39 2.28l1.41.15v64.21c.035.7.292 7.64-3.183 11.65" fill="#FFF"></path>
          <path d="M45.837 0c-.395 0-.795.002-1.198.005C44.23.002 43.83 0 43.44 0 24.468 0 0 2.79 0 2.79v69.426c0 3.502.758 8.94 4.53 13.115 7.664 8.48 19.32 14.59 26.205 17.99 11.552 5.71 13.63 8.91 13.904 9.42.27-.51 2.35-3.71 13.9-9.42 6.88-3.4 18.54-9.51 26.2-17.98 3.77-4.17 4.53-9.61 4.53-13.11V2.79S64.81 0 45.84 0m36.377 82.048C76.83 88.253 71.092 92.4 59.475 98.48l-.882.462c-5.08 2.656-5.08 2.656-12.085 6.748l-1.173.685-.696.407-.7-.407-1.17-.685c-7.01-4.092-7.01-4.092-12.09-6.748l-.88-.462C18.18 92.4 12.44 88.253 7.06 82.048c-3.475-4.005-3.22-10.954-3.182-11.65V6.185l1.41-.152c.2-.023 19.99-2.283 38.39-2.283.32 0 .64 0 .96.002.32 0 .64-.003.957-.003 18.4 0 38.193 2.26 38.39 2.28l1.41.15v64.21c.035.7.292 7.64-3.183 11.65" fill="#DABB5C"></path>
          <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="71.31" y1="18.802" x2="71.31" y2="100.327">
            <stop offset="0" stopColor="#E52420"></stop>
            <stop offset="1" stopColor="#972632"></stop>
          </linearGradient>
          <path d="M58.69 97.215l.095-.05c11.432-5.983 17.062-10.043 22.31-16.09 3.14-3.618 2.835-10.32 2.82-10.602l-.002-.076V7.517l-.083-.008c-.16-.02-11.577-1.33-25.14-1.96v91.66z" fill="url(#a)"></path>
          <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="17.969" y1="5.556" x2="17.969" y2="97.216">
            <stop offset="0" stopColor="#E52420"></stop>
            <stop offset="1" stopColor="#972632"></stop>
          </linearGradient>
          <path d="M5.448 7.51l-.083.008v62.88l-.002.075c-.014.283-.318 6.984 2.82 10.602 5.25 6.047 10.878 10.107 22.31 16.09l.096.05V5.555C17.02 6.182 5.6 7.492 5.44 7.51" fill="url(#b)"></path>
          <g opacity=".25">
            <defs>
              <path id="c" d="M44.64.005C44.236.002 43.835 0 43.44 0 24.47 0 0 2.79 0 2.79v64.104c5.822-3.83 35.753-21.56 89.278-20.394V2.79S64.81 0 45.838 0c-.396 0-.797 0-1.2.005"></path>
            </defs>
            <use xlinkHref="#c" overflow="visible" fill="#FFF"></use>
          </g>
          <path d="M13.29 55.54v-17.2h10.723v2.91h-7.565v4.07h6.53v2.91h-6.53v7.31m48.818 0v-17.2H75.99v2.91h-7.565v4.07h6.53v2.91h-6.53v7.31" fill="#FFF"></path>
          <path d="M41.806 41.25h1.526c1.138 0 1.895.04 2.273.118.512.102.935.356 1.27.763.334.41.5.93.5 1.55 0 .51-.118.96-.356 1.34-.24.39-.57.67-.99.85-.42.18-1.25.27-2.5.27H41.8v-4.88zm-3.158-2.91v17.2h3.158v-6.487h2.06c1.43 0 2.52-.083 3.275-.247.56-.133 1.11-.405 1.64-.815s.98-.97 1.33-1.69c.35-.72.53-1.6.53-2.66 0-1.37-.3-2.48-.902-3.35-.605-.86-1.354-1.42-2.252-1.68-.58-.17-1.832-.26-3.752-.26h-5.07z" fill="#E52420"></path>
        </symbol>
        <symbol id="plancentenario" xmlns="http://www.w3.org/2000/svg" width="350.62" height="106.093" viewBox="0 0 350.62 106.093">
          <g fill="#D4AA4D">
            <path d="M10.61 45.54H0v24.11h6.165v-6.165h4.444c11.537 0 11.537-17.913 0-17.946zm-.036 12.4h-4.41v-6.89c1.416 0 2.964-.035 4.41 0 3.586.035 3.38 6.89 0 6.89zM31.436 45.54h-6.202v24.11h14.948v-5.546h-8.746V45.54zM67.14 68.754L56.258 45.23h-2.65l-10.85 23.524v.896h6.026l1.412-3.03h9.507l1.41 3.03h6.028v-.896zm-14.95-7.407l2.722-6.335 2.792 6.335H52.19zM73.912 45.435h-2.237V69.65h6.372V57.8l12.156 11.88h2.204V45.54h-6.302v11.814l-12.193-11.92zM121.662 50.878c2.582 0 4.41 1.104 5.272 3.55h6.06c-.932-6.443-6.338-9.163-11.332-9.163-6.132 0-12.33 4.13-12.363 12.33.032 8.198 6.23 12.33 12.362 12.296 5.13 0 10.54-2.686 11.438-9.505h-6.063c-.658 2.582-2.756 3.894-5.375 3.894-3.65-.037-5.99-3.136-5.99-6.684 0-3.995 2.375-6.718 5.99-6.718zM154.227 51.05v-5.51h-15.05v24.11h15.36v-5.476h-9.23v-4.238h8.2V54.46h-8.2v-3.41h8.92zM163.448 45.435h-2.237V69.65h6.372V57.8l12.157 11.88h2.2V45.54h-6.298v11.814l-12.194-11.92zM199.08 69.65v-18.6h5.894v-5.51h-17.916v5.51h5.927v18.6h6.096zM225.212 51.05v-5.51h-15.05v24.11h15.36v-5.476h-9.232v-4.238h8.196V54.46h-8.196v-3.41h8.922zM234.432 45.435h-2.238V69.65h6.373V57.8l12.152 11.88h2.206V45.54h-6.304v11.814l-12.19-11.92zM257.39 68.754v.896h6.025l1.414-3.03h9.506l1.41 3.03h6.03v-.896L270.89 45.23h-2.65l-10.85 23.524zm14.946-7.407h-5.512l2.726-6.335 2.786 6.335zM296.85 45.54h-10.58v24.11h6.17v-7.096h3.202l4.135 7.095h6.885v-.897l-4.72-7.647c6.097-4.13 4.377-15.534-5.092-15.567zm0 11.54h-4.41v-6.03c1.447 0 2.96-.035 4.41 0 3.51.035 3.336 6.03 0 6.03zM318.91 50.912h2.826V45.54h-11.744v5.372h2.822v13.33h-3.067v5.407h12.227V64.24h-3.063M325.894 57.628c0 16.704 24.726 16.704 24.726 0 0-16.67-24.726-16.67-24.726 0zm6.336 0c0-8.678 12.09-8.678 12.09 0 0 8.75-12.09 8.75-12.09 0zM181.145 3.427c2.904.127 5.722.37 8.38.71 2.854.366 5.66.86 8.33 1.47 2.828.665 5.542 1.466 8.06 2.37 2.526.905 5.002 1.97 7.356 3.164.337-.02.684-.03 1.036-.03-.993-.603-2.006-1.185-3.017-1.738-2.27-1.23-4.588-2.34-6.9-3.31-5.456-2.3-11.188-3.974-17.035-4.974C183.268.388 179.08.02 174.897 0c.926.43 1.84.884 2.75 1.363 1.133.607 2.31 1.3 3.498 2.064z"></path>
            <path d="M291.01 33.224c-14.73-.682-33.19-1.386-54.537-1.896-.388-.53-.775-1.057-1.177-1.576-4.25-5.476-9.24-10.363-14.838-14.522-.512-.137-1.042-.256-1.61-.366-.67-.128-1.26-.213-1.81-.27-.385-.046-.756-.075-1.098-.096.536.88 1.043 1.802 1.542 2.808.75 1.503 1.415 3.092 1.97 4.726.585 1.69 1.06 3.396 1.463 5.22.26 1.19.488 2.432.69 3.763l-3.39-.06c-.17-1.05-.36-2.032-.566-2.97-.362-1.636-.812-3.273-1.355-4.86-.573-1.66-1.256-3.264-2.036-4.764-.746-1.463-1.623-2.908-2.618-4.295-2.208-1.112-4.536-2.112-6.927-2.967-2.396-.86-4.957-1.61-7.616-2.222-2.593-.6-5.288-1.086-8-1.427-2.464-.32-5.117-.547-7.88-.67-.78.833-1.573 1.76-2.348 2.757-.823 1.064-1.635 2.22-2.415 3.445-.7 1.11-1.39 2.314-2.102 3.68-.55 1.06-1.056 2.12-1.513 3.147 1.52.862 3.15 1.89 4.857 3.044 1.958 1.342 4.03 2.87 6.153 4.553 1.282 1.015 2.577 2.093 3.87 3.21-2.44-.014-4.905-.023-7.39-.03-1.713-1.338-3.434-2.607-5.127-3.766-1.697-1.158-3.355-2.18-4.92-3.052-2.612.306-5.168.766-7.6 1.37-2.578.642-5.103 1.454-7.493 2.412-2.222.883-4.434 1.948-6.6 3.155-2.9.03-5.822.063-8.767.103 1.902-1.365 3.88-2.644 5.916-3.808 2.503-1.42 5.12-2.683 7.78-3.747 2.604-1.043 5.315-1.924 8.066-2.62 2.52-.636 5.175-1.13 7.89-1.478.605-1.4 1.202-2.668 1.823-3.876.77-1.492 1.536-2.833 2.335-4.092.826-1.305 1.625-2.457 2.447-3.53.634-.824 1.256-1.565 1.878-2.273-.67-.4-1.378-.8-2.157-1.213-1.062-.564-2.14-1.082-3.218-1.543-1.044-.455-2.143-.876-3.344-1.278-1.04-.345-2.093-.64-3.134-.884-3.54.39-7.024 1.015-10.375 1.866-3.488.887-6.93 2.022-10.234 3.363-3.05 1.24-6 2.665-8.764 4.223-2.743 1.537-5.432 3.275-8 5.168-.79 1.01-1.488 2-2.128 3.016-.664 1.042-1.28 2.134-1.83 3.247-.487.98-.932 2.004-1.315 3.047-.225.58-.435 1.204-.636 1.875 1 .1 1.993.24 3.025.436 1.392.268 2.86.643 4.364 1.11 1.548.494 3.115 1.073 4.652 1.735.902.38 1.848.803 2.85 1.283-2.858.04-5.74.087-8.636.14-1.377-.425-2.743-.77-4.06-1.022-1.345-.237-2.533-.38-3.624-.436-.566.56-1.102 1.103-1.623 1.64-1.563.034-3.133.07-4.707.106 1.248-1.36 2.59-2.75 4.074-4.215.292-1.184.65-2.36 1.063-3.498.223-.616.467-1.23.724-1.833-2.986 2.893-5.74 6.045-8.21 9.38-.057.074-.106.15-.16.223-29.275.72-60.17 2.014-91.8 4.12h309.098c.004 0-14.227-1.076-38.844-2.22zM214.61 76.836h-78.6l-7.007 12.132h-62.49s10.02 1.08 27.348 2.22c9.48.623 21.15 1.266 34.56 1.762l7.59 13.143h78.602l7.563-13.103c19.807-.737 40.633-2.01 61.934-4.022h-62.495l-7.004-12.132zm-54.94 22.832h-9.608l-.132-1.44c.56-.6 1.126-1.25 1.704-1.948 1.97-2.46 3.42-4.394 4.348-5.796.952-1.494 1.43-2.856 1.43-4.09 0-1.59-.874-2.386-2.624-2.386-.912 0-1.93.257-3.053.77-.32.148-.597.304-.834.467l-.733-1.548c.786-.61 1.95-1.018 3.487-1.228.43-.06.947-.09 1.556-.09.602 0 1.2.095 1.785.284.59.192 1.065.457 1.428.8.69.636 1.036 1.544 1.036 2.718 0 1.324-.47 2.772-1.416 4.345-.78 1.286-1.713 2.6-2.8 3.945l-2.95 3.568h7.378v1.628zm15.796-8.517c0 2.068-.068 3.498-.207 4.297-.14.798-.325 1.46-.563 1.978-.237.522-.572.963-1.006 1.326-.883.76-2.207 1.14-3.975 1.14h-.69c-2.61 0-4.268-.834-4.974-2.498-.415-.973-.638-2.26-.664-3.857-.02-.75-.025-1.542-.025-2.384v-.667c0-1.992.083-3.378.244-4.16.166-.78.373-1.398.623-1.852.247-.456.58-.837.994-1.143.842-.625 2.11-.937 3.804-.937h.69c1.806 0 3.142.306 4 .915 1.072.766 1.642 2.345 1.718 4.735.02.743.034 1.558.034 2.442v.67zm12.81 8.518h-9.612l-.133-1.44c.556-.6 1.13-1.25 1.708-1.948 1.97-2.46 3.416-4.394 4.35-5.796.95-1.494 1.426-2.856 1.426-4.09 0-1.59-.878-2.386-2.623-2.386-.913 0-1.932.257-3.054.77-.317.148-.598.304-.836.467l-.736-1.548c.792-.61 1.95-1.018 3.493-1.228.427-.06.945-.09 1.555-.09.605 0 1.202.095 1.787.284.585.192 1.06.457 1.426.8.69.636 1.036 1.544 1.036 2.718 0 1.324-.475 2.772-1.414 4.345-.78 1.286-1.714 2.6-2.8 3.945l-2.95 3.568h7.378v1.628zm12.415 0h-9.61l-.134-1.44c.562-.6 1.128-1.25 1.707-1.948 1.97-2.46 3.415-4.394 4.348-5.796.953-1.494 1.428-2.856 1.428-4.09 0-1.59-.872-2.386-2.62-2.386-.916 0-1.935.257-3.058.77-.314.148-.596.304-.833.467l-.733-1.548c.788-.61 1.952-1.018 3.488-1.228.427-.06.945-.09 1.555-.09.603 0 1.202.095 1.787.284.585.192 1.06.457 1.427.8.69.636 1.038 1.544 1.038 2.718 0 1.324-.47 2.772-1.415 4.345-.78 1.286-1.714 2.6-2.798 3.945l-2.952 3.568h7.38v1.628z"></path>
            <path d="M173.02 85.577c-.233-.51-.6-.887-1.097-1.13-.5-.24-1.2-.363-2.1-.363h-.935c-1.612 0-2.636.505-3.075 1.518-.275.646-.427 1.436-.457 2.366-.03.933-.043 1.77-.043 2.516v1.84c0 2.258.237 3.79.713 4.602.52.87 1.52 1.302 2.998 1.302h.667c.806 0 1.452-.088 1.946-.265.495-.18.88-.492 1.158-.937.28-.448.47-1.052.564-1.81.094-.763.144-1.727.144-2.894v-1.84c0-1.136-.02-2.11-.067-2.92-.043-.81-.184-1.472-.415-1.985z"></path>
          </g>
        </symbol>
      </svg>
      <section
        className="section-home"
        id="home"
        style={{
          height: '622px'
        }}
      >
        <div className="home-conteiner">
          <div className="home-conteiner-center">
            <div className="home-conteiner-coming">
              <svg className="home-coming" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 350.62 106.093">
                <use xlinkHref="#plancentenario"></use>
              </svg>
              <svg className="home-coming-logo" version="1.1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" x="0" y="0" width="89.279" height="112.737" viewBox="0 0 89.279 112.737" xmlSpace="preserve">
                <path d="M82.215 82.048C76.83 88.253 71.092 92.4 59.475 98.48l-.882.462c-5.08 2.656-5.08 2.656-12.085 6.748l-1.173.685-.696.407-.7-.407-1.17-.685c-7.01-4.092-7.01-4.092-12.09-6.748l-.88-.462C18.18 92.4 12.44 88.253 7.06 82.048c-3.475-4.005-3.22-10.954-3.182-11.65V6.185l1.41-.152c.2-.023 19.99-2.283 38.39-2.283.32 0 .64 0 .96.002.32 0 .64-.003.957-.003 18.4 0 38.193 2.26 38.39 2.28l1.41.15v64.21c.035.7.292 7.64-3.183 11.65" fill="#FFF"></path>
                <path d="M45.837 0c-.395 0-.795.002-1.198.005C44.23.002 43.83 0 43.44 0 24.468 0 0 2.79 0 2.79v69.426c0 3.502.758 8.94 4.53 13.115 7.664 8.48 19.32 14.59 26.205 17.99 11.552 5.71 13.63 8.91 13.904 9.42.27-.51 2.35-3.71 13.9-9.42 6.88-3.4 18.54-9.51 26.2-17.98 3.77-4.17 4.53-9.61 4.53-13.11V2.79S64.81 0 45.84 0m36.377 82.048C76.83 88.253 71.092 92.4 59.475 98.48l-.882.462c-5.08 2.656-5.08 2.656-12.085 6.748l-1.173.685-.696.407-.7-.407-1.17-.685c-7.01-4.092-7.01-4.092-12.09-6.748l-.88-.462C18.18 92.4 12.44 88.253 7.06 82.048c-3.475-4.005-3.22-10.954-3.182-11.65V6.185l1.41-.152c.2-.023 19.99-2.283 38.39-2.283.32 0 .64 0 .96.002.32 0 .64-.003.957-.003 18.4 0 38.193 2.26 38.39 2.28l1.41.15v64.21c.035.7.292 7.64-3.183 11.65" fill="#DABB5C"></path>
                <linearGradient id="a" gradientUnits="userSpaceOnUse" x1="71.31" y1="18.802" x2="71.31" y2="100.327">
                  <stop offset="0" stopColor="#E52420"></stop>
                  <stop offset="1" stopColor="#972632"></stop>
                </linearGradient>
                <path d="M58.69 97.215l.095-.05c11.432-5.983 17.062-10.043 22.31-16.09 3.14-3.618 2.835-10.32 2.82-10.602l-.002-.076V7.517l-.083-.008c-.16-.02-11.577-1.33-25.14-1.96v91.66z" fill="url(#a)"></path>
                <linearGradient id="b" gradientUnits="userSpaceOnUse" x1="17.969" y1="5.556" x2="17.969" y2="97.216">
                  <stop offset="0" stopColor="#E52420"></stop>
                  <stop offset="1" stopColor="#972632"></stop>
                </linearGradient>
                <path d="M5.448 7.51l-.083.008v62.88l-.002.075c-.014.283-.318 6.984 2.82 10.602 5.25 6.047 10.878 10.107 22.31 16.09l.096.05V5.555C17.02 6.182 5.6 7.492 5.44 7.51" fill="url(#b)"></path>
                <g opacity=".25">
                  <defs>
                    <path id="c" d="M44.64.005C44.236.002 43.835 0 43.44 0 24.47 0 0 2.79 0 2.79v64.104c5.822-3.83 35.753-21.56 89.278-20.394V2.79S64.81 0 45.838 0c-.396 0-.797 0-1.2.005"></path>
                  </defs>
                  <use xlinkHref="#c" overflow="visible" fill="#FFF"></use>
                </g>
                <path d="M13.29 55.54v-17.2h10.723v2.91h-7.565v4.07h6.53v2.91h-6.53v7.31m48.818 0v-17.2H75.99v2.91h-7.565v4.07h6.53v2.91h-6.53v7.31" fill="#FFF"></path>
                <path d="M41.806 41.25h1.526c1.138 0 1.895.04 2.273.118.512.102.935.356 1.27.763.334.41.5.93.5 1.55 0 .51-.118.96-.356 1.34-.24.39-.57.67-.99.85-.42.18-1.25.27-2.5.27H41.8v-4.88zm-3.158-2.91v17.2h3.158v-6.487h2.06c1.43 0 2.52-.083 3.275-.247.56-.133 1.11-.405 1.64-.815s.98-.97 1.33-1.69c.35-.72.53-1.6.53-2.66 0-1.37-.3-2.48-.902-3.35-.605-.86-1.354-1.42-2.252-1.68-.58-.17-1.832-.26-3.752-.26h-5.07z" fill="#E52420"></path>
              </svg>
            </div>
            <h2 className="home-subtitle">EL NUEVO PLAN ESTRATÉGICO DEL FÚTBOL PERUANO<br />-</h2>
            <div className="home-conteiner-button">
              <Link href='/construyendo-el-cambio'>
                <a className="button-more">ver más</a>
              </Link>
            </div>
            <div className="home-conteiner-button">
              {/* <div className="hide-mobile">
                      <a className="button-down header-animate-link" id="btnDown" href="#header"></a>
                  </div> */}
              <div className="hide-desktop">
                <a className="button-down header-animate-link" id="btnDownTimeline" href="#timeline"></a>
              </div>
            </div>
          </div>
          <div className="home-conteiner-player">
            <iframe className="home-player" id="videoPlayer" frameBorder="0" allow="autoplay; encrypted-media" title="YouTube video player" width="100%" height="100%" src="https://www.youtube.com/embed/nZCZmtUE4MA?autoplay=1&amp;autohide=1&amp;controls=0&amp;rel=0&amp;showinfo=0&amp;mute=1&amp;playlist=nZCZmtUE4MA&amp;enablejsapi=1&amp;origin=http%3A%2F%2Fcentenario2022.cevichelabs.com&amp;widgetid=1"></iframe>
          </div>
        </div>
      </section>
      <a className="header-menu-mobile"></a>
      <header className="header" id="header">
      </header>
      <nav className="header-help">
        <a className="header-link fa fa-facebook" href="https://www.facebook.com/federacionperuanadefutbol?fref=ts" target="_blank"></a>
        <a className="header-link fa fa-twitter" href="https://twitter.com/tufpf" target="_blank"></a>
        <a className="header-link fa fa-instagram" href="https://instagram.com/tufpfoficial/" target="_blank"></a>
        <a className="header-link fa fa-youtube" href="https://www.youtube.com/channel/UC5aze-DjrA_BYmWjulX19nw/featured" target="_blank"></a>
      </nav>
    </div>
  </Layout>
)
