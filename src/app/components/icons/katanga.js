/**
 *    Copyright 2016-today Software Craftmanship Toledo
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 * http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */

import React, { PropTypes } from 'react'

const Katanga = ( { circleFillColor, circleBorderColor, busAndTextColor } ) => (
    <svg className="ktg-logo-katanga" width="677px" height="677px" viewBox="0 0 677 677">
        <g id="color-&amp;-text" stroke="none" strokeWidth="1" fill="none" fillRule="evenodd">
            <g id="logo" transform="translate(3.000000, 3.000000)">
                <circle id="katanga-logo-background" stroke={circleBorderColor} strokeWidth="5" fill={circleFillColor} cx="335.5" cy="335.5" r="335.5"></circle>
                <path d="M137.491,448.992 L144.253,448.992 L144.253,490.054 L168.263,469.082 L178.161,469.082 L149.545,493.876 L179.827,521.12 L170.321,521.12 L144.253,497.698 L144.253,521.12 L137.491,521.12 L137.491,448.992 Z M239.509,469.082 L239.509,521.12 L232.943,521.12 L232.943,512.202 C226.997637,519.323369 220.203038,522.884 212.559,522.884 C204.914962,522.884 198.46336,520.156361 193.204,514.701 C187.94464,509.245639 185.315,502.745038 185.315,495.199 C185.315,487.652962 187.960974,481.185027 193.253,475.795 C198.545026,470.404973 204.882296,467.71 212.265,467.71 C220.758376,467.71 227.650974,471.335964 232.943,478.588 L232.943,469.082 L239.509,469.082 Z M233.335,495.346 C233.335,489.400637 231.342353,484.386354 227.357,480.303 C223.371647,476.219646 218.488029,474.178 212.706,474.178 C206.923971,474.178 202.040353,476.284979 198.055,480.499 C194.069647,484.713021 192.077,489.694638 192.077,495.444 C192.077,501.193362 194.102313,506.174979 198.153,510.389 C202.203687,514.603021 207.054638,516.71 212.706,516.71 C218.357362,516.71 223.208313,514.684687 227.259,510.634 C231.309687,506.583313 233.335,501.487364 233.335,495.346 Z M267.243,512.888 C267.243,514.652009 267.471664,515.697332 267.929,516.024 C268.386336,516.350668 269.562324,516.514 271.457,516.514 L275.475,516.514 L275.475,522.198 C272.730986,522.655336 270.575008,522.884 269.007,522.884 C266.066985,522.884 263.911007,522.165341 262.539,520.728 C261.166993,519.290659 260.481,517.036682 260.481,513.966 L260.481,474.766 L251.269,474.766 L251.269,469.082 L260.481,469.082 L260.481,448.992 L267.243,448.992 L267.243,469.082 L277.827,469.082 L277.827,474.766 L267.243,474.766 L267.243,512.888 Z M339.665,469.082 L339.665,521.12 L333.099,521.12 L333.099,512.202 C327.153637,519.323369 320.359038,522.884 312.715,522.884 C305.070962,522.884 298.61936,520.156361 293.36,514.701 C288.10064,509.245639 285.471,502.745038 285.471,495.199 C285.471,487.652962 288.116974,481.185027 293.409,475.795 C298.701026,470.404973 305.038296,467.71 312.421,467.71 C320.914376,467.71 327.806974,471.335964 333.099,478.588 L333.099,469.082 L339.665,469.082 Z M333.491,495.346 C333.491,489.400637 331.498353,484.386354 327.513,480.303 C323.527647,476.219646 318.644029,474.178 312.862,474.178 C307.079971,474.178 302.196353,476.284979 298.211,480.499 C294.225647,484.713021 292.233,489.694638 292.233,495.444 C292.233,501.193362 294.258313,506.174979 298.309,510.389 C302.359687,514.603021 307.210638,516.71 312.862,516.71 C318.513362,516.71 323.364313,514.684687 327.415,510.634 C331.465687,506.583313 333.491,501.487364 333.491,495.346 Z M354.757,469.082 L361.519,469.082 L361.519,478.392 C366.87636,471.270631 373.376962,467.71 381.021,467.71 C384.94102,467.71 388.468984,468.771656 391.605,470.895 C394.741016,473.018344 396.962327,475.794983 398.269,479.225 C399.575673,482.655017 400.229,487.701967 400.229,494.366 L400.229,521.12 L393.565,521.12 L393.565,496.326 C393.565,490.24997 393.287336,486.134011 392.732,483.978 C392.176664,481.821989 391.327339,479.992674 390.184,478.49 C389.040661,476.987326 387.587009,475.844004 385.823,475.06 C384.058991,474.275996 381.919346,473.884 379.404,473.884 C376.888654,473.884 374.422345,474.50466 372.005,475.746 C369.587655,476.98734 367.529675,478.718656 365.831,480.94 C364.132325,483.161344 362.989003,485.447988 362.401,487.8 C361.812997,490.152012 361.519,494.888631 361.519,502.01 L361.519,521.12 L354.757,521.12 L354.757,469.082 Z M460.107,469.082 L466.869,469.082 L466.869,509.262 C466.869,516.383369 466.24834,521.609983 465.007,524.942 C463.76566,528.274017 461.969012,531.050656 459.617,533.272 C457.264988,535.493344 454.423017,537.191994 451.091,538.368 C447.758983,539.544006 444.100353,540.132 440.115,540.132 C426.525599,540.132 417.575022,534.709388 413.263,523.864 L420.515,523.864 C424.304352,530.658701 430.739621,534.056 439.821,534.056 C444.198355,534.056 448.003984,533.206675 451.238,531.508 C454.472016,529.809325 456.75866,527.637013 458.098,524.991 C459.43734,522.344987 460.107,518.212695 460.107,512.594 L460.107,510.34 C457.42832,513.672017 454.259685,516.154658 450.601,517.788 C446.942315,519.421341 443.087687,520.238 439.037,520.238 C431.458295,520.238 425.153692,517.657359 420.123,512.496 C415.092308,507.334641 412.577,501.258702 412.577,494.268 C412.577,487.015964 415.25564,480.776693 420.613,475.55 C425.97036,470.323307 432.454629,467.71 440.066,467.71 C447.677371,467.71 454.357638,471.172632 460.107,478.098 L460.107,469.082 Z M460.401,494.268 C460.401,488.583972 458.473686,483.814686 454.619,479.96 C450.764314,476.105314 445.995028,474.178 440.311,474.178 C434.300303,474.178 429.302353,476.252313 425.317,480.401 C421.331647,484.549687 419.339,489.30264 419.339,494.66 C419.339,500.01736 421.266314,504.574315 425.121,508.331 C428.975686,512.087685 433.908303,513.966 439.919,513.966 C445.929697,513.966 450.845981,512.136685 454.668,508.478 C458.490019,504.819315 460.401,500.082696 460.401,494.268 Z M532.333,469.082 L532.333,521.12 L525.767,521.12 L525.767,512.202 C519.821637,519.323369 513.027038,522.884 505.383,522.884 C497.738962,522.884 491.28736,520.156361 486.028,514.701 C480.76864,509.245639 478.139,502.745038 478.139,495.199 C478.139,487.652962 480.784974,481.185027 486.077,475.795 C491.369026,470.404973 497.706296,467.71 505.089,467.71 C513.582376,467.71 520.474974,471.335964 525.767,478.588 L525.767,469.082 L532.333,469.082 Z M485.76355,203 L479.337192,203 L479.187018,134.460269 L457.701273,109.799605 L403.71724,106.117594 C403.71724,106.117594 403.71724,90.2543606 403.71724,90.2543606 C403.71724,90.2543606 268.275461,89.4219588 268.275461,90.7688059 C268.275461,92.1156529 268.275461,106.117594 268.275461,106.117594 L213.367913,109.799605 L191.821774,134.460269 L191.821774,208 L192.23645,208 L192.23645,224 L191.821774,224 L191.821774,364.118482 L189.23645,364.118482 L189.23645,394 L482.23645,394 L482.23645,364.118482 L479.690209,364.118482 L479.394159,229 L498.76355,229 L498.76355,216 L505.772395,216 C506.872079,216 507.76355,215.107783 507.76355,213.99791 L507.76355,164.00209 C507.76355,162.896366 506.873876,162 505.772395,162 L487.754705,162 C486.65502,162 485.76355,162.892217 485.76355,164.00209 L485.76355,203 Z M485.76355,208 L478.76355,208 L478.76355,224 L493.76355,224 L493.76355,216 L487.754705,216 C486.653224,216 485.76355,215.103634 485.76355,213.99791 L485.76355,208 Z M185.23645,203 L191.76355,203 L191.76355,208 L185.23645,208 L185.23645,213.99791 C185.23645,215.103634 184.346776,216 183.245295,216 L177.23645,216 L177.23645,224 L191.76355,224 L191.76355,229 L172.23645,229 L172.23645,216 L165.227605,216 C164.127921,216 163.23645,215.107783 163.23645,213.99791 L163.23645,164.00209 C163.23645,162.896366 164.126124,162 165.227605,162 L183.245295,162 C184.34498,162 185.23645,162.892217 185.23645,164.00209 L185.23645,203 Z M526.159,495.346 C526.159,489.400637 524.166353,484.386354 520.181,480.303 C516.195647,476.219646 511.312029,474.178 505.53,474.178 C499.747971,474.178 494.864353,476.284979 490.879,480.499 C486.893647,484.713021 484.901,489.694638 484.901,495.444 C484.901,501.193362 486.926313,506.174979 490.977,510.389 C495.027687,514.603021 499.878638,516.71 505.53,516.71 C511.181362,516.71 516.032313,514.684687 520.083,510.634 C524.133687,506.583313 526.159,501.487364 526.159,495.346 Z M215.546473,114.843972 L267.251005,111.596119 L267.398053,134.689028 L199.715514,134.689028 L215.546473,114.843972 Z M455.672878,114.843972 L403.968346,111.596119 L403.821298,134.689028 L471.503837,134.689028 L455.672878,114.843972 Z M273.280008,96.0086746 L398.344826,96.0086746 L398.344826,144.078071 L273.280008,144.078071 L273.280008,96.0086746 Z M196.781404,139.911411 L265.328886,139.911411 C265.328886,139.911411 265.367243,144.379287 267.299885,146.61347 C269.232528,148.847652 273.050424,148.847652 273.050424,148.847652 L333.545617,148.847652 L333.545617,277.505649 L196.423769,277.505649 L196.781404,139.911411 Z M474.026601,139.911411 L405.479119,139.911411 C405.479119,139.911411 405.440762,144.379287 403.50812,146.61347 C401.575477,148.847652 397.757581,148.847652 397.757581,148.847652 L338.497403,148.847652 L338.497403,277.505649 L474.384236,277.505649 L474.026601,139.911411 Z M196.761108,282.649658 L474.23645,282.649658 L474.23645,364 L196.761108,364 L196.761108,282.649658 Z M285.23645,301.006024 C285.23645,296.584419 288.815816,293 293.233808,293 L372.239092,293 C376.655911,293 380.23645,296.588092 380.23645,301.006024 L380.23645,345.993976 C380.23645,350.415581 376.657084,354 372.239092,354 L293.233808,354 C288.816989,354 285.23645,350.411908 285.23645,345.993976 L285.23645,301.006024 Z M214.556432,304.665229 C214.530996,301.350337 217.187466,298.663086 220.501069,298.663086 L259.651763,298.663086 C262.960331,298.663086 265.642456,301.346776 265.642456,304.665229 L265.642456,338.572564 C265.642456,341.887456 262.948167,344.574707 259.643014,344.574707 L220.862113,344.574707 C217.548713,344.574707 214.842078,341.891017 214.816614,338.572564 L214.556432,304.665229 Z M399.556432,304.665229 C399.530996,301.350337 402.187466,298.663086 405.501069,298.663086 L444.651763,298.663086 C447.960331,298.663086 450.642456,301.346776 450.642456,304.665229 L450.642456,338.572564 C450.642456,341.887456 447.948167,344.574707 444.643014,344.574707 L405.862113,344.574707 C402.548713,344.574707 399.842078,341.891017 399.816614,338.572564 L399.556432,304.665229 Z M194.23645,369 L477.23645,369 L477.23645,389 L194.23645,389 L194.23645,369 Z M404.23645,305.0024 C404.23645,303.896505 405.133111,303 406.233942,303 L444.238958,303 C445.342142,303 446.23645,303.896279 446.23645,305.0024 L446.23645,337.9976 C446.23645,339.103495 445.33979,340 444.238958,340 L406.233942,340 C405.130758,340 404.23645,339.103721 404.23645,337.9976 L404.23645,305.0024 Z M219.23645,305.0024 C219.23645,303.896505 220.133111,303 221.233942,303 L259.238958,303 C260.342142,303 261.23645,303.896279 261.23645,305.0024 L261.23645,337.9976 C261.23645,339.103495 260.33979,340 259.238958,340 L221.233942,340 C220.130758,340 219.23645,339.103721 219.23645,337.9976 L219.23645,305.0024 Z M290.23645,299.99926 C290.23645,298.895099 291.133528,298 292.233037,298 L373.239864,298 C374.342548,298 375.23645,298.895992 375.23645,299.99926 L375.23645,347.00074 C375.23645,348.104901 374.339373,349 373.239864,349 L292.233037,349 C291.130352,349 290.23645,348.104008 290.23645,347.00074 L290.23645,299.99926 Z M214.23645,394 L263.23645,394 L263.23645,422.008383 C263.23645,423.108323 262.344135,424 261.239599,424 L216.233302,424 C215.130471,424 214.23645,423.10216 214.23645,422.008383 L214.23645,394 Z M408.23645,394 L457.23645,394 L457.23645,422.008383 C457.23645,423.108323 456.344135,424 455.239599,424 L410.233302,424 C409.130471,424 408.23645,423.10216 408.23645,422.008383 L408.23645,394 Z M412.803589,394 L451.603882,394 L451.603882,418.890625 L412.803589,418.890625 L412.803589,394 Z M219.803589,394 L258.603882,394 L258.603882,418.890625 L219.803589,418.890625 L219.803589,394 Z M168.23645,167 L180.23645,167 L180.23645,212 L168.23645,212 L168.23645,167 Z M502.76355,167 L490.76355,167 L490.76355,212 L502.76355,212 L502.76355,167 Z" id="katanga-logo-text" fill={busAndTextColor}></path>
            </g>
        </g>
    </svg>

)

Katanga.propTypes = {
    circleFillColor: PropTypes.string,
    circleBorderColor: PropTypes.string,
    busAndTextColor: PropTypes.string
}

export default Katanga


