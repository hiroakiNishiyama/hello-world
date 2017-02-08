<%--以下の1行の記述は本JSPファイルを作成する際の定型文となります--%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>

<%--以下からメソッドを記述しています--%>
<%!

/**
* あるテーブルのあるカラムを重複なしでを取得します
*/
private List<Map<String,String>> getDistinctCol(String TABLE_NAME, String COL_NAME) {
	Connection con = null;
	Statement stmt = null;
	ResultSet rs = null;
	//取得した結果を入れるための配列を作成します
	Map<String, String> map;
	List<Map<String, String>> array = new ArrayList<Map<String, String>>();
	try {
		//MySQLに接続するためにJDBCドライバを読み込みます
		Class.forName(JDBC_DRIVER);
		// データベースに接続するために、Connectionオブジェクトを取得します
		con = DriverManager.getConnection(JDBC_NAME, JDBC_USER, JDBC_PASS);
		// データベース操作を行うために、Statementオブジェクトを取得します
		stmt = con.createStatement();

		// SQL作成
		StringBuffer sqlBuf = new StringBuffer();
		sqlBuf.append("SELECT DISTINCT " + COL_NAME + " ");
		sqlBuf.append("FROM " + TABLE_NAME);

		// SQLを実行して、実行結果を得ます
		rs = stmt.executeQuery(sqlBuf.toString());

		//以下の①,②をSQLの実行結果がすべて処理されるまで繰り返します
		while (rs.next()){
			// ①HashMapにカラムを格納します
			map = new HashMap<String, String>();
			map.put(COL_NAME1, rs.getString(COL_NAME1));
			map.put(COL_NAME2, rs.getString(COL_NAME2));

			// ②ArrayListにHashMapを格納します
			array.add(map);
		}

	} catch (Exception e) {
		// エラー処理
		e.printStackTrace();	// トレースを出力
	} finally {
		// データベース切断処理
		try { rs.close(); } catch (Exception e) {}
		try { stmt.close(); } catch (Exception e) {}
		try { con.close(); } catch (Exception e) {}
	}
	return array;
}

%>
