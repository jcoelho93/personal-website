#!/bin/sh
## Update files on FTP server

sudo apt-get update
sudo apt-get install -y ftp

ftp -inv <<END_SCRIPT
open $FTP_HOST
user $FTP_USER $FTP_PASS
ls
quit
END_SCRIPT
exit
