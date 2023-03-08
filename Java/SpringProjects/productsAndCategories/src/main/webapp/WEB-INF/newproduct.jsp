<%@ page language="java" contentType="text/html; charset=ISO-8859-1"
    pageEncoding="ISO-8859-1"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core" %>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %>
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>New Product</title>
</head>
<body>
	<a href="/">Home</a>
	<table>
	<form:form action="#" method="post" modelAttribute="newProduct">
		<tbody>
			<tr>
				<td>Name:</td>
				<td><form:input type="text" path="name"/>
			</tr>
			<tr>
				<td>Description:</td>
				<td><form:input type="text" path="description"/></td>
			</tr>
			<tr>
				<td>Price</td>
				<td><form:input type="number" path="price"/>
			</tr>
		</tbody>
		<button>Submit</button>
	</form:form>
	</table>
</body>
</html>