'use client';

import { motion } from 'framer-motion';
import React from 'react';

import HighlightedWord from '@modules/common/components/highlighted-word';
import Section from '../../section/section';
import HomeSkillsCard, { HomeSkillsCardProps } from './home-skills-card';

const SKILLS_ENTRIES: HomeSkillsCardProps[] = [
  {
    title: 'Java',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M13.219 2.25C14.27 4.731 9.449 6.252 9 8.32c-.41 1.899 2.856 4.125 2.86 4.125-.499-.785-.862-1.447-1.36-2.672-.844-2.068 5.142-3.934 2.719-7.523Zm3.187 3.445s-4.216.267-4.43 3.024c-.096 1.227 1.114 1.872 1.149 2.765.03.73-.727 1.336-.727 1.336s1.357-.246 1.782-1.36c.468-1.235-.914-2.08-.774-3.07.135-.946 3-2.695 3-2.695Zm1.032 6.352c-.443-.02-.94.143-1.383.469.873-.194 1.617.354 1.617.984 0 1.412-2.016 2.742-2.016 2.742s3.117-.348 3.117-2.672c0-.958-.6-1.488-1.335-1.523Zm-8.274.023c-1.087.038-3.258.217-3.258 1.055 0 1.166 5.057 1.257 8.672.54 0 0 .985-.686 1.242-.938-2.37.492-7.78.568-7.78.14 0-.392 1.733-.797 1.733-.797s-.246-.011-.609 0Zm-.328 2.157c-.595 0-1.477.463-1.477.914 0 .908 4.477 1.605 7.782.28l-1.149-.702c-2.241.732-6.38.489-5.156-.492Zm.562 2.039c-.811 0-1.335.512-1.335.89 0 1.163 4.848 1.278 6.773.094l-1.219-.797c-1.435.618-5.048.71-4.219-.187ZM6.68 17.32c-1.325-.026-2.18.575-2.18 1.078 0 2.681 13.57 2.552 13.57-.187 0-.454-.536-.671-.726-.773 1.107 2.619-11.086 2.414-11.086.867 0-.352.902-.703 1.734-.54l-.703-.398a4.471 4.471 0 0 0-.61-.047Zm12.82 1.805c-2.063 1.995-7.283 2.71-12.54 1.477 5.257 2.197 12.514.975 12.54-1.477Z" />
      </svg>
    ),
  },
  {
    title: 'Typescript',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M1.125 0C.502 0 0 .502 0 1.125v21.75C0 23.498.502 24 1.125 24h21.75c.623 0 1.125-.502 1.125-1.125V1.125C24 .502 23.498 0 22.875 0zm17.363 9.75c.612 0 1.154.037 1.627.111a6.38 6.38 0 0 1 1.306.34v2.458a3.95 3.95 0 0 0-.643-.361 5.093 5.093 0 0 0-.717-.26 5.453 5.453 0 0 0-1.426-.2c-.3 0-.573.028-.819.086a2.1 2.1 0 0 0-.623.242c-.17.104-.3.229-.393.374a.888.888 0 0 0-.14.49c0 .196.053.373.156.529.104.156.252.304.443.444s.423.276.696.41c.273.135.582.274.926.416.47.197.892.407 1.266.628.374.222.695.473.963.753.268.279.472.598.614.957.142.359.214.776.214 1.253 0 .657-.125 1.21-.373 1.656a3.033 3.033 0 0 1-1.012 1.085 4.38 4.38 0 0 1-1.487.596c-.566.12-1.163.18-1.79.18a9.916 9.916 0 0 1-1.84-.164 5.544 5.544 0 0 1-1.512-.493v-2.63a5.033 5.033 0 0 0 3.237 1.2c.333 0 .624-.03.872-.09.249-.06.456-.144.623-.25.166-.108.29-.234.373-.38a1.023 1.023 0 0 0-.074-1.089 2.12 2.12 0 0 0-.537-.5 5.597 5.597 0 0 0-.807-.444 27.72 27.72 0 0 0-1.007-.436c-.918-.383-1.602-.852-2.053-1.405-.45-.553-.676-1.222-.676-2.005 0-.614.123-1.141.369-1.582.246-.441.58-.804 1.004-1.089a4.494 4.494 0 0 1 1.47-.629 7.536 7.536 0 0 1 1.77-.201zm-15.113.188h9.563v2.166H9.506v9.646H6.789v-9.646H3.375z" />
      </svg>
    ),
  },
  {
    title: 'React',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M14.23 12.004a2.236 2.236 0 0 1-2.235 2.236 2.236 2.236 0 0 1-2.236-2.236 2.236 2.236 0 0 1 2.235-2.236 2.236 2.236 0 0 1 2.236 2.236zm2.648-10.69c-1.346 0-3.107.96-4.888 2.622-1.78-1.653-3.542-2.602-4.887-2.602-.41 0-.783.093-1.106.278-1.375.793-1.683 3.264-.973 6.365C1.98 8.917 0 10.42 0 12.004c0 1.59 1.99 3.097 5.043 4.03-.704 3.113-.39 5.588.988 6.38.32.187.69.275 1.102.275 1.345 0 3.107-.96 4.888-2.624 1.78 1.654 3.542 2.603 4.887 2.603.41 0 .783-.09 1.106-.275 1.374-.792 1.683-3.263.973-6.365C22.02 15.096 24 13.59 24 12.004c0-1.59-1.99-3.097-5.043-4.032.704-3.11.39-5.587-.988-6.38-.318-.184-.688-.277-1.092-.278zm-.005 1.09v.006c.225 0 .406.044.558.127.666.382.955 1.835.73 3.704-.054.46-.142.945-.25 1.44-.96-.236-2.006-.417-3.107-.534-.66-.905-1.345-1.727-2.035-2.447 1.592-1.48 3.087-2.292 4.105-2.295zm-9.77.02c1.012 0 2.514.808 4.11 2.28-.686.72-1.37 1.537-2.02 2.442-1.107.117-2.154.298-3.113.538-.112-.49-.195-.964-.254-1.42-.23-1.868.054-3.32.714-3.707.19-.09.4-.127.563-.132zm4.882 3.05c.455.468.91.992 1.36 1.564-.44-.02-.89-.034-1.345-.034-.46 0-.915.01-1.36.034.44-.572.895-1.096 1.345-1.565zM12 8.1c.74 0 1.477.034 2.202.093.406.582.802 1.203 1.183 1.86.372.64.71 1.29 1.018 1.946-.308.655-.646 1.31-1.013 1.95-.38.66-.773 1.288-1.18 1.87-.728.063-1.466.098-2.21.098-.74 0-1.477-.035-2.202-.093-.406-.582-.802-1.204-1.183-1.86-.372-.64-.71-1.29-1.018-1.946.303-.657.646-1.313 1.013-1.954.38-.66.773-1.286 1.18-1.868.728-.064 1.466-.098 2.21-.098zm-3.635.254c-.24.377-.48.763-.704 1.16-.225.39-.435.782-.635 1.174-.265-.656-.49-1.31-.676-1.947.64-.15 1.315-.283 2.015-.386zm7.26 0c.695.103 1.365.23 2.006.387-.18.632-.405 1.282-.66 1.933-.2-.39-.41-.783-.64-1.174-.225-.392-.465-.774-.705-1.146zm3.063.675c.484.15.944.317 1.375.498 1.732.74 2.852 1.708 2.852 2.476-.005.768-1.125 1.74-2.857 2.475-.42.18-.88.342-1.355.493-.28-.958-.646-1.956-1.1-2.98.45-1.017.81-2.01 1.085-2.964zm-13.395.004c.278.96.645 1.957 1.1 2.98-.45 1.017-.812 2.01-1.086 2.964-.484-.15-.944-.318-1.37-.5-1.732-.737-2.852-1.706-2.852-2.474 0-.768 1.12-1.742 2.852-2.476.42-.18.88-.342 1.356-.494zm11.678 4.28c.265.657.49 1.312.676 1.948-.64.157-1.316.29-2.016.39.24-.375.48-.762.705-1.158.225-.39.435-.788.636-1.18zm-9.945.02c.2.392.41.783.64 1.175.23.39.465.772.705 1.143-.695-.102-1.365-.23-2.006-.386.18-.63.406-1.282.66-1.933zM17.92 16.32c.112.493.2.968.254 1.423.23 1.868-.054 3.32-.714 3.708-.147.09-.338.128-.563.128-1.012 0-2.514-.807-4.11-2.28.686-.72 1.37-1.536 2.02-2.44 1.107-.118 2.154-.3 3.113-.54zm-11.83.01c.96.234 2.006.415 3.107.532.66.905 1.345 1.727 2.035 2.446-1.595 1.483-3.092 2.295-4.11 2.295-.22-.005-.406-.05-.553-.132-.666-.38-.955-1.834-.73-3.703.054-.46.142-.944.25-1.438zm4.56.64c.44.02.89.034 1.345.034.46 0 .915-.01 1.36-.034-.44.572-.895 1.095-1.345 1.565-.455-.47-.91-.993-1.36-1.565z" />
      </svg>
    ),
  },
  {
    title: 'NextJS',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.5725 0c-.1763 0-.3098.0013-.3584.0067-.0516.0053-.2159.021-.3636.0328-3.4088.3073-6.6017 2.1463-8.624 4.9728C1.1004 6.584.3802 8.3666.1082 10.255c-.0962.659-.108.8537-.108 1.7474s.012 1.0884.108 1.7476c.652 4.506 3.8591 8.2919 8.2087 9.6945.7789.2511 1.6.4223 2.5337.5255.3636.04 1.9354.04 2.299 0 1.6117-.1783 2.9772-.577 4.3237-1.2643.2065-.1056.2464-.1337.2183-.1573-.0188-.0139-.8987-1.1938-1.9543-2.62l-1.919-2.592-2.4047-3.5583c-1.3231-1.9564-2.4117-3.556-2.4211-3.556-.0094-.0026-.0187 1.5787-.0235 3.509-.0067 3.3802-.0093 3.5162-.0516 3.596-.061.115-.108.1618-.2064.2134-.075.0374-.1408.0445-.495.0445h-.406l-.1078-.068a.4383.4383 0 01-.1572-.1712l-.0493-.1056.0053-4.703.0067-4.7054.0726-.0915c.0376-.0493.1174-.1125.1736-.143.0962-.047.1338-.0517.5396-.0517.4787 0 .5584.0187.6827.1547.0353.0377 1.3373 1.9987 2.895 4.3608a10760.433 10760.433 0 004.7344 7.1706l1.9002 2.8782.096-.0633c.8518-.5536 1.7525-1.3418 2.4657-2.1627 1.5179-1.7429 2.4963-3.868 2.8247-6.134.0961-.6591.1078-.854.1078-1.7475 0-.8937-.012-1.0884-.1078-1.7476-.6522-4.506-3.8592-8.2919-8.2087-9.6945-.7672-.2487-1.5836-.42-2.4985-.5232-.169-.0176-1.0835-.0366-1.6123-.037zm4.0685 7.217c.3473 0 .4082.0053.4857.047.1127.0562.204.1642.237.2767.0186.061.0234 1.3653.0186 4.3044l-.0067 4.2175-.7436-1.14-.7461-1.14v-3.066c0-1.982.0093-3.0963.0234-3.1502.0375-.1313.1196-.2346.2323-.2955.0961-.0494.1313-.054.4997-.054z" />
      </svg>
    ),
  },
  {
    title: 'C++',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M22.394 6c-.167-.29-.398-.543-.652-.69L12.926.22c-.509-.294-1.34-.294-1.848 0L2.26 5.31c-.508.293-.923 1.013-.923 1.6v10.18c0 .294.104.62.271.91.167.29.398.543.652.69l8.816 5.09c.508.293 1.34.293 1.848 0l8.816-5.09c.254-.147.485-.4.652-.69.167-.29.27-.616.27-.91V6.91c.003-.294-.1-.62-.268-.91zM12 19.11c-3.92 0-7.109-3.19-7.109-7.11 0-3.92 3.19-7.11 7.11-7.11a7.133 7.133 0 016.156 3.553l-3.076 1.78a3.567 3.567 0 00-3.08-1.78A3.56 3.56 0 008.444 12 3.56 3.56 0 0012 15.555a3.57 3.57 0 003.08-1.778l3.078 1.78A7.135 7.135 0 0112 19.11zm7.11-6.715h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79zm2.962 0h-.79v.79h-.79v-.79h-.79v-.79h.79v-.79h.79v.79h.79z" />
      </svg>
    ),
  },
  {
    title: 'NodeJS',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M11.998,24c-0.321,0-0.641-0.084-0.922-0.247l-2.936-1.737c-0.438-0.245-0.224-0.332-0.08-0.383 c0.585-0.203,0.703-0.25,1.328-0.604c0.065-0.037,0.151-0.023,0.218,0.017l2.256,1.339c0.082,0.045,0.197,0.045,0.272,0l8.795-5.076 c0.082-0.047,0.134-0.141,0.134-0.238V6.921c0-0.099-0.053-0.192-0.137-0.242l-8.791-5.072c-0.081-0.047-0.189-0.047-0.271,0 L3.075,6.68C2.99,6.729,2.936,6.825,2.936,6.921v10.15c0,0.097,0.054,0.189,0.139,0.235l2.409,1.392 c1.307,0.654,2.108-0.116,2.108-0.89V7.787c0-0.142,0.114-0.253,0.256-0.253h1.115c0.139,0,0.255,0.112,0.255,0.253v10.021 c0,1.745-0.95,2.745-2.604,2.745c-0.508,0-0.909,0-2.026-0.551L2.28,18.675c-0.57-0.329-0.922-0.945-0.922-1.604V6.921 c0-0.659,0.353-1.275,0.922-1.603l8.795-5.082c0.557-0.315,1.296-0.315,1.848,0l8.794,5.082c0.57,0.329,0.924,0.944,0.924,1.603 v10.15c0,0.659-0.354,1.273-0.924,1.604l-8.794,5.078C12.643,23.916,12.324,24,11.998,24z M19.099,13.993 c0-1.9-1.284-2.406-3.987-2.763c-2.731-0.361-3.009-0.548-3.009-1.187c0-0.528,0.235-1.233,2.258-1.233 c1.807,0,2.473,0.389,2.747,1.607c0.024,0.115,0.129,0.199,0.247,0.199h1.141c0.071,0,0.138-0.031,0.186-0.081 c0.048-0.054,0.074-0.123,0.067-0.196c-0.177-2.098-1.571-3.076-4.388-3.076c-2.508,0-4.004,1.058-4.004,2.833 c0,1.925,1.488,2.457,3.895,2.695c2.88,0.282,3.103,0.703,3.103,1.269c0,0.983-0.789,1.402-2.642,1.402 c-2.327,0-2.839-0.584-3.011-1.742c-0.02-0.124-0.126-0.215-0.253-0.215h-1.137c-0.141,0-0.254,0.112-0.254,0.253 c0,1.482,0.806,3.248,4.655,3.248C17.501,17.007,19.099,15.91,19.099,13.993z" />
      </svg>
    ),
  },
  {
    title: 'PostgreSQL',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M23.5594 14.7228a.5269.5269 0 0 0-.0563-.1191c-.139-.2632-.4768-.3418-1.0074-.2321-1.6533.3411-2.2935.1312-2.5256-.0191 1.342-2.0482 2.445-4.522 3.0411-6.8297.2714-1.0507.7982-3.5237.1222-4.7316a1.5641 1.5641 0 0 0-.1509-.235C21.6931.9086 19.8007.0248 17.5099.0005c-1.4947-.0158-2.7705.3461-3.1161.4794a9.449 9.449 0 0 0-.5159-.0816 8.044 8.044 0 0 0-1.3114-.1278c-1.1822-.0184-2.2038.2642-3.0498.8406-.8573-.3211-4.7888-1.645-7.2219.0788C.9359 2.1526.3086 3.8733.4302 6.3043c.0409.818.5069 3.334 1.2423 5.7436.4598 1.5065.9387 2.7019 1.4334 3.582.553.9942 1.1259 1.5933 1.7143 1.7895.4474.1491 1.1327.1441 1.8581-.7279.8012-.9635 1.5903-1.8258 1.9446-2.2069.4351.2355.9064.3625 1.39.3772a.0569.0569 0 0 0 .0004.0041 11.0312 11.0312 0 0 0-.2472.3054c-.3389.4302-.4094.5197-1.5002.7443-.3102.064-1.1344.2339-1.1464.8115-.0025.1224.0329.2309.0919.3268.2269.4231.9216.6097 1.015.6331 1.3345.3335 2.5044.092 3.3714-.6787-.017 2.231.0775 4.4174.3454 5.0874.2212.5529.7618 1.9045 2.4692 1.9043.2505 0 .5263-.0291.8296-.0941 1.7819-.3821 2.5557-1.1696 2.855-2.9059.1503-.8707.4016-2.8753.5388-4.1012.0169-.0703.0357-.1207.057-.1362.0007-.0005.0697-.0471.4272.0307a.3673.3673 0 0 0 .0443.0068l.2539.0223.0149.001c.8468.0384 1.9114-.1426 2.5312-.4308.6438-.2988 1.8057-1.0323 1.5951-1.6698zM2.371 11.8765c-.7435-2.4358-1.1779-4.8851-1.2123-5.5719-.1086-2.1714.4171-3.6829 1.5623-4.4927 1.8367-1.2986 4.8398-.5408 6.108-.13-.0032.0032-.0066.0061-.0098.0094-2.0238 2.044-1.9758 5.536-1.9708 5.7495-.0002.0823.0066.1989.0162.3593.0348.5873.0996 1.6804-.0735 2.9184-.1609 1.1504.1937 2.2764.9728 3.0892.0806.0841.1648.1631.2518.2374-.3468.3714-1.1004 1.1926-1.9025 2.1576-.5677.6825-.9597.5517-1.0886.5087-.3919-.1307-.813-.5871-1.2381-1.3223-.4796-.839-.9635-2.0317-1.4155-3.5126zm6.0072 5.0871c-.1711-.0428-.3271-.1132-.4322-.1772.0889-.0394.2374-.0902.4833-.1409 1.2833-.2641 1.4815-.4506 1.9143-1.0002.0992-.126.2116-.2687.3673-.4426a.3549.3549 0 0 0 .0737-.1298c.1708-.1513.2724-.1099.4369-.0417.156.0646.3078.26.3695.4752.0291.1016.0619.2945-.0452.4444-.9043 1.2658-2.2216 1.2494-3.1676 1.0128zm2.094-3.988-.0525.141c-.133.3566-.2567.6881-.3334 1.003-.6674-.0021-1.3168-.2872-1.8105-.8024-.6279-.6551-.9131-1.5664-.7825-2.5004.1828-1.3079.1153-2.4468.079-3.0586-.005-.0857-.0095-.1607-.0122-.2199.2957-.2621 1.6659-.9962 2.6429-.7724.4459.1022.7176.4057.8305.928.5846 2.7038.0774 3.8307-.3302 4.7363-.084.1866-.1633.3629-.2311.5454zm7.3637 4.5725c-.0169.1768-.0358.376-.0618.5959l-.146.4383a.3547.3547 0 0 0-.0182.1077c-.0059.4747-.054.6489-.115.8693-.0634.2292-.1353.4891-.1794 1.0575-.11 1.4143-.8782 2.2267-2.4172 2.5565-1.5155.3251-1.7843-.4968-2.0212-1.2217a6.5824 6.5824 0 0 0-.0769-.2266c-.2154-.5858-.1911-1.4119-.1574-2.5551.0165-.5612-.0249-1.9013-.3302-2.6462.0044-.2932.0106-.5909.019-.8918a.3529.3529 0 0 0-.0153-.1126 1.4927 1.4927 0 0 0-.0439-.208c-.1226-.4283-.4213-.7866-.7797-.9351-.1424-.059-.4038-.1672-.7178-.0869.067-.276.1831-.5875.309-.9249l.0529-.142c.0595-.16.134-.3257.213-.5012.4265-.9476 1.0106-2.2453.3766-5.1772-.2374-1.0981-1.0304-1.6343-2.2324-1.5098-.7207.0746-1.3799.3654-1.7088.5321a5.6716 5.6716 0 0 0-.1958.1041c.0918-1.1064.4386-3.1741 1.7357-4.4823a4.0306 4.0306 0 0 1 .3033-.276.3532.3532 0 0 0 .1447-.0644c.7524-.5706 1.6945-.8506 2.802-.8325.4091.0067.8017.0339 1.1742.081 1.939.3544 3.2439 1.4468 4.0359 2.3827.8143.9623 1.2552 1.9315 1.4312 2.4543-1.3232-.1346-2.2234.1268-2.6797.779-.9926 1.4189.543 4.1729 1.2811 5.4964.1353.2426.2522.4522.2889.5413.2403.5825.5515.9713.7787 1.2552.0696.087.1372.1714.1885.245-.4008.1155-1.1208.3825-1.0552 1.717-.0123.1563-.0423.4469-.0834.8148-.0461.2077-.0702.4603-.0994.7662zm.8905-1.6211c-.0405-.8316.2691-.9185.5967-1.0105a2.8566 2.8566 0 0 0 .135-.0406 1.202 1.202 0 0 0 .1342.103c.5703.3765 1.5823.4213 3.0068.1344-.2016.1769-.5189.3994-.9533.6011-.4098.1903-1.0957.333-1.7473.3636-.7197.0336-1.0859-.0807-1.1721-.151zm.5695-9.2712c-.0059.3508-.0542.6692-.1054 1.0017-.055.3576-.112.7274-.1264 1.1762-.0142.4368.0404.8909.0932 1.3301.1066.887.216 1.8003-.2075 2.7014a3.5272 3.5272 0 0 1-.1876-.3856c-.0527-.1276-.1669-.3326-.3251-.6162-.6156-1.1041-2.0574-3.6896-1.3193-4.7446.3795-.5427 1.3408-.5661 2.1781-.463zm.2284 7.0137a12.3762 12.3762 0 0 0-.0853-.1074l-.0355-.0444c.7262-1.1995.5842-2.3862.4578-3.4385-.0519-.4318-.1009-.8396-.0885-1.2226.0129-.4061.0666-.7543.1185-1.0911.0639-.415.1288-.8443.1109-1.3505.0134-.0531.0188-.1158.0118-.1902-.0457-.4855-.5999-1.938-1.7294-3.253-.6076-.7073-1.4896-1.4972-2.6889-2.0395.5251-.1066 1.2328-.2035 2.0244-.1859 2.0515.0456 3.6746.8135 4.8242 2.2824a.908.908 0 0 1 .0667.1002c.7231 1.3556-.2762 6.2751-2.9867 10.5405zm-8.8166-6.1162c-.025.1794-.3089.4225-.6211.4225a.5821.5821 0 0 1-.0809-.0056c-.1873-.026-.3765-.144-.5059-.3156-.0458-.0605-.1203-.178-.1055-.2844.0055-.0401.0261-.0985.0925-.1488.1182-.0894.3518-.1226.6096-.0867.3163.0441.6426.1938.6113.4186zm7.9305-.4114c.0111.0792-.049.201-.1531.3102-.0683.0717-.212.1961-.4079.2232a.5456.5456 0 0 1-.075.0052c-.2935 0-.5414-.2344-.5607-.3717-.024-.1765.2641-.3106.5611-.352.297-.0414.6111.0088.6356.1851z" />
      </svg>
    ),
  },
  {
    title: 'OpenGL',
    icon: (
      <svg
        xmlns="http://www.w3.org/2000/svg"
        className="h-12 w-12 fill-primary"
        viewBox="0 0 24 24"
        strokeWidth="2"
        fill="none"
        strokeLinecap="round"
        strokeLinejoin="round"
      >
        <path d="M7.921 11.382v.376h.009a.696.696 0 0 1 .362-.336c.165-.07.346-.105.543-.105.219 0 .411.039.574.118.163.079.298.185.406.319a1.4 1.4 0 0 1 .244.464c.055.175.082.361.082.558 0 .197-.027.383-.08.558a1.325 1.325 0 0 1-.241.459 1.126 1.126 0 0 1-.406.308 1.345 1.345 0 0 1-.568.113 1.457 1.457 0 0 1-.488-.091.984.984 0 0 1-.239-.132.722.722 0 0 1-.189-.207h-.009v1.432H7.45v-3.835h.471zm1.671.986a1.01 1.01 0 0 0-.159-.33.78.78 0 0 0-.274-.231.849.849 0 0 0-.392-.086c-.157 0-.29.03-.4.091a.783.783 0 0 0-.268.239.992.992 0 0 0-.151.335 1.577 1.577 0 0 0 .003.775.966.966 0 0 0 .156.335.785.785 0 0 0 .276.233c.113.059.25.088.411.088.161 0 .295-.03.402-.091a.744.744 0 0 0 .26-.241c.066-.1.113-.214.142-.343.029-.129.044-.261.044-.397a1.343 1.343 0 0 0-.05-.377zm2.951 1.611c-.213.157-.48.236-.803.236a1.5 1.5 0 0 1-.591-.107 1.17 1.17 0 0 1-.421-.301 1.272 1.272 0 0 1-.256-.461 2.157 2.157 0 0 1-.096-.585c0-.211.033-.404.099-.579.066-.175.159-.327.278-.456a1.25 1.25 0 0 1 .424-.3c.163-.072.342-.107.537-.107.253 0 .463.051.63.153.167.102.301.232.402.39.101.158.171.33.209.516.039.186.054.364.047.532h-2.127c-.004.121.011.237.044.345a.779.779 0 0 0 .159.289.778.778 0 0 0 .28.201c.113.05.247.075.401.075a.826.826 0 0 0 .486-.134.654.654 0 0 0 .25-.408h.462c-.064.31-.201.544-.414.701zm-.114-1.78a.792.792 0 0 0-.743-.477.827.827 0 0 0-.326.062.737.737 0 0 0-.249.169.81.81 0 0 0-.164.249.926.926 0 0 0-.071.302h1.628a.93.93 0 0 0-.075-.305zm1.327-.817v.44h.009c.195-.337.504-.505.928-.505.188 0 .344.025.469.075.125.05.226.12.304.21.077.09.132.196.163.32s.047.261.047.411v1.827h-.471v-1.879a.546.546 0 0 0-.154-.408.582.582 0 0 0-.424-.15.978.978 0 0 0-.372.065.696.696 0 0 0-.262.183.785.785 0 0 0-.157.276 1.096 1.096 0 0 0-.052.346v1.568h-.471v-2.777h.443zm5.174 2.747a1.67 1.67 0 0 1-.644.131c-.342 0-.649-.058-.922-.174a1.976 1.976 0 0 1-.691-.48 2.112 2.112 0 0 1-.431-.719c-.1-.275-.15-.572-.15-.89 0-.326.05-.629.15-.909.1-.279.243-.523.43-.731.187-.208.417-.371.69-.49a2.3 2.3 0 0 1 .922-.177c.229 0 .451.034.665.101.215.068.408.167.581.297a1.6 1.6 0 0 1 .634 1.144h-.937c-.058-.244-.171-.427-.338-.55a1 1 0 0 0-.606-.183c-.221 0-.408.042-.563.125s-.279.196-.375.337a1.444 1.444 0 0 0-.209.48 2.327 2.327 0 0 0 0 1.092c.044.173.114.329.21.468.096.139.221.25.375.333.154.084.342.125.563.125.325 0 .577-.08.754-.241.177-.16.281-.393.31-.698h-.987v-.717h1.872v2.358h-.623l-.1-.495a1.44 1.44 0 0 1-.58.463zM21.825 9.8v3.55H24v.809h-3.154V9.8h.979zM3.801 13.98c.053.03.107.059.164.085.267.124.578.186.933.186.355 0 .666-.062.933-.186s.491-.292.67-.503c.179-.211.314-.454.404-.728.09-.274.135-.56.135-.856 0-.297-.045-.582-.135-.856a2.135 2.135 0 0 0-.404-.728 1.966 1.966 0 0 0-.67-.506 2.17 2.17 0 0 0-.933-.189c-.355 0-.666.063-.933.189l-.03.015c1.425-1.199 4.034-2.001 7.017-2.001 2.512 0 4.765.516 6.263 1.412-1.635-1.501-4.566-2.555-7.918-2.556C4.162 6.757 0 9.103 0 11.999c0 2.895 4.161 5.243 9.294 5.244 3.338.001 6.262-1.051 7.901-2.541-1.498.89-3.741 1.397-6.244 1.397-3.078-.001-5.759-.856-7.15-2.119zm.395-3.638c.196-.104.43-.156.702-.156.272 0 .506.052.702.156.196.104.357.241.483.412.125.171.217.363.276.577a2.43 2.43 0 0 1 0 1.3c-.059.214-.15.406-.276.576a1.393 1.393 0 0 1-.483.412c-.197.104-.43.155-.702.155a1.49 1.49 0 0 1-.702-.155 1.402 1.402 0 0 1-.483-.412 1.765 1.765 0 0 1-.276-.576 2.43 2.43 0 0 1 0-1.3 1.74 1.74 0 0 1 .276-.577c.125-.171.286-.308.483-.412z" />
      </svg>
    ),
  },
];

const HomeSkills: React.FC = () => (
  <Section className="z-20" id="projects">
    {/* Heading */}
    <motion.h2
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.25,
      }}
      className="mb-2 text-4xl font-extrabold text-primary md:mb-4 md:text-5xl"
    >
      Skills
    </motion.h2>
    {/* Text */}
    <motion.p
      initial={{ opacity: 0, translateY: -20 }}
      whileInView={{ opacity: 1, translateY: 0 }}
      viewport={{ once: true }}
      transition={{
        type: 'tween',
        duration: 0.25,
        delay: 0.15,
      }}
      className="mb-2 md:mb-4 md:text-lg"
    >
      In my journey as a software and web developer, I have cultivated a versatile skill set to tackle diverse projects.
      I specialize in front-end development, proficient in languages like HTML, CSS, and Typescript, and frameworks such
      as <HighlightedWord>React</HighlightedWord> and <HighlightedWord>NextJS</HighlightedWord>.
    </motion.p>

    <div className="mx-4 mt-6 md:mx-8 lg:mx-14 grid grid-cols-2 md:grid-cols-4 gap-4">
      {SKILLS_ENTRIES.map((skill, index) => (
        <motion.div
          key={skill.title}
          initial={{ opacity: 0, translateY: -20 }}
          whileInView={{ opacity: 1, translateY: 0 }}
          viewport={{ once: true }}
          transition={{
            type: 'tween',
            duration: 0.25,
            delay: index * 0.15 + 0.15,
          }}
        >
          <HomeSkillsCard {...skill} />
        </motion.div>
      ))}
    </div>
  </Section>
);

export default HomeSkills;
