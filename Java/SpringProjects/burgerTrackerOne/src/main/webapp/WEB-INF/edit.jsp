<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Burger</title>
</head>
<body>
	<h2>Add a Burger:</h2>
	<table>
		<tbody>
			<form:form action="/burger/${burger.id}" method="post" modelAttribute="burger">
			<input type="hidden" name="_method" value="put">
			<tr>
				<td><form:label path="burgerName">Burger Name</form:label></td>
				<td><form:errors path="burgerName"></form:errors></td>
				<td><form:input path="burgerName"/></td>
			</tr>
			<tr>
				<td><form:label path="restaurantName">Restaurant Name</form:label></td>
				<td><form:errors path="restaurantName"/>
				<td><form:input path="restaurantName"/></td>
			</tr>
			<tr>
				<td><form:label path="rating">Rating</form:label><td>
				<td><form:errors path="rating"/></td>
				<td><form:input type="number" path="rating"/></td>
			</tr>
			<tr>
				<td><form:label path="notes">Notes</form:label><td>
				<td><form:errors path="notes"/></td>
				<td><form:textarea path="notes"></form:textarea>
			</tr>
			<tr>
				<td><button>Submit</button></td>
			</tr>
			</form:form>
		</tbody>
	</table>
</body>
</html>