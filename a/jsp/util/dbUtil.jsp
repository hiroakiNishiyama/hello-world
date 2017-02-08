<%--以下の5行の記述は本JSPファイルを作成する際の定型文となります--%>
<%@ taglib prefix="t" uri="http://tiles.apache.org/tags-tiles"%>
<%@ taglib uri="http://www.springframework.org/security/tags"
	prefix="authz"%>
<%@ taglib prefix="c" uri="http://java.sun.com/jstl/core_rt"%>
<%@ taglib uri="/spring" prefix="spring"%>
<%@ page contentType="text/html;charset=UTF-8" language="java"%>
<%--sqlを使用するための記述をします--%>
<%@ page import="java.sql.*"%>
<%--Javaクラスを使用するための記述を行います--%>
<%@ page import="java.lang.*, java.util.*" %>
<%--ログインIDを取得するためにspringframeworkのクラスを使用します--%>
<%@ page import="org.springframework.security.context.SecurityContextHolder"%>
<%@ page import="org.springframework.security.Authentication"%>

<%--メソッドを記述しています--%>
<%!
/* デバッグフラグ */
private static boolean DEBUG_FLG = false;

/* LaKeelBI情報 */
private static String LBI_NOTLOGIN_USER = "anonymousUser";

/* データベース情報 */
private static String JDBC_DRIVER = "com.mysql.jdbc.Driver";
// private static String JDBC_NAME = "jdbc:mysql://localhost:3306/lbis";
// private static String JDBC_USER = "root";
// private static String JDBC_PASS = "root";
private static String JDBC_NAME = "jdbc:mysql://192.168.11.13:3306/lbis";
private static String JDBC_USER = "radmin";
private static String JDBC_PASS = "ramla";
private static String JDBC_NAME_LBI = "jdbc:mysql://localhost:3306/lakeelbi";
private static String JDBC_USER_LBI = "root";
private static String JDBC_PASS_LBI = "root";

<%--以下からSELECT処理を記述しています--%>
<%@ include file="dbSelect.jsp"%>

<%--以下から画面表示処理を記述しています--%>
<!DOCTYPE html>
