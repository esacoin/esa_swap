import { Path, Svg } from 'react-native-svg'

// eslint-disable-next-line no-relative-import-paths/no-relative-import-paths
import { createIcon } from '../factories/createIcon'

export const [SettingsWarning, AnimatedSettingsWarning] = createIcon({
  name: 'SettingsWarning',
  getIcon: (props) => (
    <Svg viewBox="0 0 22 20" fill="none" {...props}>
      <Path
        d="M11.7498 15.6063C11.2588 16.5249 11.3226 17.5326 11.7604 18.3337H8.16796C7.99203 18.3337 7.85315 18.1948 7.85315 18.0188C7.85315 17.0281 7.32538 16.1207 6.47353 15.6207C5.61242 15.1207 4.54761 15.1207 3.67724 15.6114C3.63094 15.6392 3.57538 15.6577 3.51982 15.6577C3.41797 15.6577 3.31612 15.6022 3.26056 15.5003L1.71425 12.8337C1.62166 12.6855 1.67724 12.5003 1.82539 12.4077H1.83463C2.68648 11.9077 3.21428 10.9911 3.21428 9.99106C3.21428 9.00032 2.6865 8.09291 1.82539 7.59291C1.72354 7.5281 1.66797 7.42626 1.66797 7.31515C1.66797 7.26885 1.67724 7.21329 1.70501 7.16699L3.26056 4.50032C3.3439 4.35218 3.52909 4.29662 3.67724 4.38922C4.10317 4.62996 4.58465 4.75958 5.06613 4.75958C5.55687 4.75958 6.03834 4.62995 6.47353 4.37995C7.33464 3.87995 7.86242 2.97254 7.86242 1.9818C7.86242 1.80588 8.00129 1.66699 8.16796 1.66699H11.8346C12.0013 1.66699 12.1402 1.80588 12.1402 1.9818C12.1402 2.97254 12.668 3.87995 13.5291 4.37995C13.9643 4.62995 14.4457 4.75958 14.9365 4.75958C15.418 4.75958 15.8994 4.62996 16.3254 4.38922C16.3717 4.36144 16.4272 4.34293 16.4828 4.34293C16.5846 4.34293 16.6865 4.39847 16.742 4.50032L18.2884 7.16699C18.3809 7.31514 18.3254 7.50032 18.1772 7.59291C17.6446 7.90216 17.2395 8.37079 17.008 8.91776C16.0191 8.94024 15.0401 9.45359 14.503 10.4574L11.7498 15.6063ZM7.22352 10.0003C7.22352 11.5374 8.46427 12.7781 10.0013 12.7781C11.5383 12.7781 12.7791 11.5374 12.7791 10.0003C12.7791 8.46329 11.5383 7.22255 10.0013 7.22255C8.46427 7.22255 7.22352 8.46329 7.22352 10.0003Z"
        fill={'currentColor' ?? '#FF0000'}
        fillRule="evenodd"
        clipRule="evenodd"
      />
      <Path
        d="M21.0779 16.3135L18.325 11.1651C17.7917 10.1676 16.3588 10.1676 15.825 11.1651L13.0722 16.3135C12.583 17.2285 13.2472 18.3335 14.2868 18.3335H19.8633C20.9025 18.3335 21.5671 17.2281 21.0779 16.3135ZM17.075 13.021C16.9025 13.021 16.7625 13.161 16.7625 13.3335V15.0002C16.7625 15.1727 16.9025 15.3127 17.075 15.3127C17.2475 15.3127 17.3875 15.1727 17.3875 15.0002V13.3335C17.3875 13.161 17.2475 13.021 17.075 13.021ZM16.6646 16.2502C16.6646 16.4802 16.8534 16.6668 17.0834 16.6668C17.3134 16.6668 17.5001 16.4802 17.5001 16.2502C17.5001 16.0202 17.3138 15.8335 17.0834 15.8335H17.0792C16.8492 15.8335 16.6646 16.0202 16.6646 16.2502Z"
        fill={'currentColor' ?? '#FF0000'}
        fillRule="evenodd"
        clipRule="evenodd"
      />
    </Svg>
  ),
  defaultFill: '#FF0000',
})