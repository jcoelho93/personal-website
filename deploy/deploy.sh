#!/bin/sh
## Update files on FTP server

pwd
ls
ls build

lftp -u $FTP_USER,$FTP_PASS $FTP_HOST <<END_SCRIPT
set ftp:ssl-allow no
debug
glob -a rm -r *(D)
mirror -R build .
quit
END_SCRIPT
exit 0
