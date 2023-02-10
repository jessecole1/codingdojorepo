<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expense Details</title>
</head>
<body>
	<h2>Expense Details</h2>
	<table>
		<tbody>
			<tr>
				<td>Expense Name:</td>
				<td><c:out value="${expense.name}"/></td>
			</tr>
			<tr>
				<td>Description:</td>
				<td><c:out value="${expense.description}"/></td>
			</tr>
			<tr>
				<td>Vendor:</td>
				<td><c:out value="${expense.vendor}"/></td>
			</tr>
			<tr>
				<td>Amount:</td>
				<td>$<c:out value="${expense.amount}"/></td>
			</tr>
		</tbody>
	</table>
	<p><a href="/return">Back Home</a></p>
</body>
</html>