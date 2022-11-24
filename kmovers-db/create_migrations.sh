if [ -z "$1" ]
  then
    echo "Please supply a migration description!"
fi
description="${1// /_}"
timestamp=`date +%Y.%m.%d.%H.%M.%S`
filename="V${timestamp}__${description}.sql"
echo "Creating migration file: ${filename}"
cd "sql_versions"
touch $filename