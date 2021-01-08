#!/bin/sh
## Update files on FTP server

pwd
ls
ls build

ftp -inv <<END_SCRIPT
open $FTP_HOST
user $FTP_USER $FTP_PASS
ls
quit
END_SCRIPT
exit
