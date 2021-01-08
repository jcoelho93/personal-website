#!/bin/sh
## Delete all files from FTP server

lftp -u $FTP_USER,$FTP_PASS $FTP_HOST <<END_SCRIPT
set ftp:ssl-allow no
debug
glob -a rm -r *
mirror -R build .
quit
END_SCRIPT
exit 0
