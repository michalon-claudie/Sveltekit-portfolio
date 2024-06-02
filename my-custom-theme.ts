
import type { CustomThemeConfig } from '@skeletonlabs/tw-plugin';

export const myCustomTheme: CustomThemeConfig = {
    name: 'my-custom-theme',
    properties: {
		// =~= Theme Properties =~=
		"--theme-font-family-base": `system-ui`,
		"--theme-font-family-heading": `system-ui`,
		"--theme-font-color-base": "0 0 0",
		"--theme-font-color-dark": "255 255 255",
		"--theme-rounded-base": "9999px",
		"--theme-rounded-container": "8px",
		"--theme-border-base": "1px",
		// =~= Theme On-X Colors =~=
		"--on-primary": "0 0 0",
		"--on-secondary": "255 255 255",
		"--on-tertiary": "0 0 0",
		"--on-success": "0 0 0",
		"--on-warning": "255 255 255",
		"--on-error": "255 255 255",
		"--on-surface": "0 0 0",
		// =~= Theme Colors  =~=
		// primary | #ebb7f0 
		"--color-primary-50": "252 244 253", // #fcf4fd
		"--color-primary-100": "251 241 252", // #fbf1fc
		"--color-primary-200": "250 237 251", // #faedfb
		"--color-primary-300": "247 226 249", // #f7e2f9
		"--color-primary-400": "241 205 245", // #f1cdf5
		"--color-primary-500": "235 183 240", // #ebb7f0
		"--color-primary-600": "212 165 216", // #d4a5d8
		"--color-primary-700": "176 137 180", // #b089b4
		"--color-primary-800": "141 110 144", // #8d6e90
		"--color-primary-900": "115 90 118", // #735a76
		// secondary | #435fea 
		"--color-secondary-50": "227 231 252", // #e3e7fc
		"--color-secondary-100": "217 223 251", // #d9dffb
		"--color-secondary-200": "208 215 250", // #d0d7fa
		"--color-secondary-300": "180 191 247", // #b4bff7
		"--color-secondary-400": "123 143 240", // #7b8ff0
		"--color-secondary-500": "67 95 234", // #435fea
		"--color-secondary-600": "60 86 211", // #3c56d3
		"--color-secondary-700": "50 71 176", // #3247b0
		"--color-secondary-800": "40 57 140", // #28398c
		"--color-secondary-900": "33 47 115", // #212f73
		// tertiary | #bababa 
		"--color-tertiary-50": "245 245 245", // #f5f5f5
		"--color-tertiary-100": "241 241 241", // #f1f1f1
		"--color-tertiary-200": "238 238 238", // #eeeeee
		"--color-tertiary-300": "227 227 227", // #e3e3e3
		"--color-tertiary-400": "207 207 207", // #cfcfcf
		"--color-tertiary-500": "186 186 186", // #bababa
		"--color-tertiary-600": "167 167 167", // #a7a7a7
		"--color-tertiary-700": "140 140 140", // #8c8c8c
		"--color-tertiary-800": "112 112 112", // #707070
		"--color-tertiary-900": "91 91 91", // #5b5b5b
		// success | #ffffff 
		"--color-success-50": "255 255 255", // #ffffff
		"--color-success-100": "255 255 255", // #ffffff
		"--color-success-200": "255 255 255", // #ffffff
		"--color-success-300": "255 255 255", // #ffffff
		"--color-success-400": "255 255 255", // #ffffff
		"--color-success-500": "255 255 255", // #ffffff
		"--color-success-600": "230 230 230", // #e6e6e6
		"--color-success-700": "191 191 191", // #bfbfbf
		"--color-success-800": "153 153 153", // #999999
		"--color-success-900": "125 125 125", // #7d7d7d
		// warning | #d0435f 
		"--color-warning-50": "248 227 231", // #f8e3e7
		"--color-warning-100": "246 217 223", // #f6d9df
		"--color-warning-200": "243 208 215", // #f3d0d7
		"--color-warning-300": "236 180 191", // #ecb4bf
		"--color-warning-400": "222 123 143", // #de7b8f
		"--color-warning-500": "208 67 95", // #d0435f
		"--color-warning-600": "187 60 86", // #bb3c56
		"--color-warning-700": "156 50 71", // #9c3247
		"--color-warning-800": "125 40 57", // #7d2839
		"--color-warning-900": "102 33 47", // #66212f
		// error | #832148 
		"--color-error-50": "236 222 228", // #ecdee4
		"--color-error-100": "230 211 218", // #e6d3da
		"--color-error-200": "224 200 209", // #e0c8d1
		"--color-error-300": "205 166 182", // #cda6b6
		"--color-error-400": "168 100 127", // #a8647f
		"--color-error-500": "131 33 72", // #832148
		"--color-error-600": "118 30 65", // #761e41
		"--color-error-700": "98 25 54", // #621936
		"--color-error-800": "79 20 43", // #4f142b
		"--color-error-900": "64 16 35", // #401023
		// surface | #a4f4e7 
		"--color-surface-50": "241 253 251", // #f1fdfb
		"--color-surface-100": "237 253 250", // #edfdfa
		"--color-surface-200": "232 252 249", // #e8fcf9
		"--color-surface-300": "219 251 245", // #dbfbf5
		"--color-surface-400": "191 247 238", // #bff7ee
		"--color-surface-500": "164 244 231", // #a4f4e7
		"--color-surface-600": "148 220 208", // #94dcd0
		"--color-surface-700": "123 183 173", // #7bb7ad
		"--color-surface-800": "98 146 139", // #62928b
		"--color-surface-900": "80 120 113", // #507871
		
	}
}