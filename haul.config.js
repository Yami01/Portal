// haul.config.js
import { makeConfig, withPolyfills } from "@haul-bundler/preset-0.59";

export default makeConfig({
	bundles: {
		index: {
			entry: withPolyfills('./index.ts'),
			looseMode: [
				require.resolve('./MyModule.js'),
				/node_modules\/react-native-lottie/,
			],
		},
	},
});
