

const editor =  grapesjs.init({
  container : "#editor",
  fromElement : true,
  width :'auto',
  StorageManager : false,
  plugins: ["gjs-preset-webpage",],
  pluginsOpts: {
    "gjs-preset-webpage": {}, 
  },
});

