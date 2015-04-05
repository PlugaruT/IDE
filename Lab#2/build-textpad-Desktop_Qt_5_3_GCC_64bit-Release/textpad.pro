QT += widgets

HEADERS       = mainwindow.h
SOURCES       = main.cpp \
                mainwindow.cpp
#! [0]
RESOURCES     = textpad.qrc
#! [0]

# install
target.path = /usr/bin/textpad
INSTALLS += target
