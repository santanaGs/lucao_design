import { css } from 'styled-components'

export const mixins = {
  fonts: {
    titleLG: css`
      font-size: 120px;
      /* line-height: 160%; */
      font-weight: 900;
      color: ${(props) => props.theme.white};
      text-transform: uppercase;
    `,
    titleG: css`
        font-size: 70px;
        /* line-height: 160%; */
        font-weight: bold;
        color: ${(props) => props.theme.white};
        text-transform: uppercase;
      `,
    title: css`
        font-size: 40px;
        font-weight: bold;
        color: ${(props) => props.theme.white};
  `,
    descriptionInfo: css`
          font-size: 30px;
          /* line-height: 160%; */
          font-weight: 400;
          color: ${(props) => props.theme.white};
        `,
    subtitle: css`
        font-size: 40px;
        line-height: 160%;
        font-weight: 400;
        color: ${(props) => props.theme.white};
        text-transform: none;
        margin-top: -1%;
      `,
    titleLogo: css`
      font-size: 20px;
      font-weight: 400;
      color: ${(props) => props.theme.white};
    `,
    calloutRegular: css`
      font-size: 16px;
      font-weight: 400;
      line-height: 120%;
      color: ${(props) => props.theme['gray-400']};
    `,
  },
}
