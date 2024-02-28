//ctrl + j to reload

var writeToButton;
var formatType;

//const { execSync, ChildProcess } = require("child_process");

//plugin registries
Plugin.register("modding_wizard", {
  title: "Modding Wizard",
		author: "Sn0wix_",
		description: "Export your item, block or entity model as a simple minecraft mod that can later be edited in Mcreator.",
		about: "TODO",
		icon: "icon-modding-wizard",
		tags: ["Minecraft: Java Edition", "Exporter", "Format"],
		version: "0.0.1",
		variant: "desktop",

  onload() {
    try {
      checkJava();
    } catch (Error) {
      //Blockbench.showQuickMessage("Errored",1000);
    }
    /*addWriteToButton();
    MenuBar.addAction(writeToButton, "file.export");*/


    //addFormatType();
    /*MenuBar.addAction(formatType, "");
    formatType = new ModelLoader("fabtic_wizard_", {
      icon: "icon-fabric-wizard",
    });*/
  },

  onunload() {
    Blockbench.showQuickMessage("Unloaded", 500);

    writeToButton.delete();
  },

  oninstall() {
    //TODO open console with current downloading status + dialog with jdk and jre options
    //TODO download jar files from github


    try {
      checkJava();
    } catch (Error) {}
  },

  onuninstall() {
    //TODO delete jar files downloaded from github
    Blockbench.showQuickMessage("Uninstalled", 1000);
  },
});



//JAVA VERSION CHECKING
function checkJava() {
  var jdkVersion = runCmdCommand("javac -version");
Blockbench.showQuickMessage(jdkVersion, 4000);

  if (!extractJdkVersion(jdkVersion) >= 17) {
    console.log(jdkVersion);
  }
}


function extractJdkVersion(javaVersionOutput) {
  // Match the version number using a regular expression
  const versionMatch = javaVersionOutput.match(/(\d+)\.(\d+)\.(\d+)/);

  // Check if there is a match
  if (versionMatch && versionMatch.length >= 4) {
      // Extract the major version (index 1)
      var majorVersion = 0;
      try {
        majorVersion = parseInt(versionMatch[1], 10);
      }catch (error) {
        console.error(error);
      }

      return majorVersion;
  } else {
      // Return an appropriate value if no match is found
      return 0;
  }
}

function runCmdCommand(command) {
  const ChildProcess = require("child_process");
  try {
    const output = ChildProcess.execSync(command, { encoding: "utf-8" });
    return output;
  } catch (error) {
    Blockbench.showQuickMessage("error" ,1000);
    console.error(`Error executing command: ${error.message}`);
    return "";
  }
}

//BUTTONS
function addFormatType() {}

function addWriteToButton() {
  writeToButton = new Action("export_vs", {
    name: "Write model into Fabric mod",
    description: "Write your model into a fabric mod.",
    icon: "fa-file-export",

    click: function () {
      new Dialog("export_into_fabric_mod", {
        id: "export_into_fabric_mod",
        form: {
          mappings: {
            label: "Model Type",
            type: "select",
            options: {
              item: "Item",
              block: "Block",
              entity: "Entity",
            },
            default: "Item",
          },
        },
        component: {},
      }).show();
    },

    onConfirm: function () {},
  });
}
