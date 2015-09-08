COUNT=10
while (( COUNT > 0 ))
do
	mkdir sql-2-$COUNT
	touch sql-2-$COUNT/sql-2-$COUNT.sql
	(( COUNT -- ))
done
