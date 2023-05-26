UPDATE userdata SET club = '가 동아리' WHERE id != '571785';
UPDATE userdata SET club = '마 동아리' WHERE id = '571785';
UPDATE userdata SET club = '마 동아리' WHERE id = '606587';

SELECT clubdata.club_name as '동아리 명', id as '학번'
	FROM clubdata
	INNER JOIN userdata ON userdata.club = clubdata.club_name
    ORDER BY club_name;