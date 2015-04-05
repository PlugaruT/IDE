#include <QApplication>
#include "mainwindow.h"

int main(int argc, char *argv[])
{
    Q_INIT_RESOURCE(textpad);

    QApplication app(argc, argv);
    app.setOrganizationName("PlugaruTudor");
    app.setApplicationName("TextPad");
    app.setApplicationVersion("1.0");
    app.setWindowIcon(QIcon(":/images/icon.png"));
    MainWindow mainWin;
    mainWin.show();
    return app.exec();
}
