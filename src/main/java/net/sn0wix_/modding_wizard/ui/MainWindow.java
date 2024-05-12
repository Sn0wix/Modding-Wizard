package net.sn0wix_.modding_wizard.ui;

import javafx.application.Application;
import javafx.fxml.FXMLLoader;
import javafx.scene.Parent;
import javafx.scene.Scene;
import javafx.stage.Screen;
import javafx.stage.Stage;

import java.util.Objects;

public class MainWindow extends Application {
    public static final String DEFAULT_TITLE = "Modding Wizard";
    private static String CURRENT_TITLE = DEFAULT_TITLE;

    @Override
    public void start(Stage stage) throws Exception {
        Screen screen = Screen.getPrimary();
        double sizeX = screen.getVisualBounds().getMaxX() / 1.5;
        double sizeY = screen.getVisualBounds().getMaxY() / 1.5;

        Parent root = FXMLLoader.load(Objects.requireNonNull(getClass().getResource("MainWindow.fxml")));
        Scene scene = new Scene(root, sizeX, sizeY);


        stage.setTitle(CURRENT_TITLE);
        stage.getIcons().add(Images.ICON);

        stage.setScene(scene);
        stage.show();
    }
}
