const context = require.context('./', true, /^(?!.\/index\.js$).*\.js$/);

context.keys().forEach(context);
