<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Dojos</title>
</head>
<body>
	<h1>Dojos</h1>
	<table>
		<thead>
			<tr>
				<th>Name</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="dojo" items="${dojos}">
			<tr>
				<td><a href="/dojos/one/${dojo.id}"><c:out value="${dojo.name}"/></a></td>
			</tr>
			</c:forEach>
		</tbody>
	</table>
	<a href="/dojos/new">New Dojo</a>
	<span><p>=======</p></span>
	<a href="/ninja/new">New Ninja</a>
</body>
</html>