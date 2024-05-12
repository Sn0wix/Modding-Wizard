module net.sn0wix_.modding_wizard {
    requires javafx.controls;
    requires javafx.fxml;


    opens net.sn0wix_.modding_wizard to javafx.fxml;
    exports net.sn0wix_.modding_wizard.ui;
}