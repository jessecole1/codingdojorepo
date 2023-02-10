<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Edit Expense</title>
</head>
<body>
	<h2>Edit Expense</h2>
		<form:form action="/expense/edit/${expense.id}" method="post" modelAttribute="expense">
		<input type="hidden" name="_method" value="put">
		<table>
			<tbody>
				<tr>
					<td>
						<form:label path="name">Expense Name:</form:label>
					</td>
					<td>
						<form:input path="name" type="text"/>
					</td>
				</tr>
				<tr>
					<td>
						<form:label path="vendor">Vendor:</form:label>
					</td>
					<td>
						<form:input path="vendor" type="text"/>
					</td>
				</tr>
				<tr>
					<td>
						<form:label path="amount">Amount:</form:label>
					</td>
					<td>
						<form:input path="amount" type="number"/>
					</td>
				</tr>
				<tr>
					<td>
						<form:label path="description">Description:</form:label>
					</td>
					<td>
						<form:textarea path="description"></form:textarea>
					</td>
				</tr>
				<tr>
					<td>
						<button>Submit</button>
					</td>
				</tr>
			</tbody>
		</table>
	</form:form>
	<p><a href="/return">Back Home</a>
</body>
</html>