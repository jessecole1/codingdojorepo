<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<%@ taglib prefix = "c" uri = "http://java.sun.com/jsp/jstl/core"%>
<%@ taglib prefix="form" uri="http://www.springframework.org/tags/form" %>
<%@ page isErrorPage="true" %> 
<!DOCTYPE html>
<html>
<head>
<meta charset="UTF-8">
<title>Expenses</title>
</head>
<body>
	<h2>Save Travels</h2>
	<table>
		<thead>
			<tr>
				<th>Expense</th>
				<th>Vendor</th>
				<th>Amount</th>
				<th>Actions</th>
			</tr>
		</thead>
		<tbody>
			<c:forEach var="exp" items="${expenses}">
				<tr>
					<td><a href="/expense/one/${exp.id}"><c:out value="${exp.name}"></c:out></a></td>
					<td><c:out value="${exp.vendor}"></c:out></td>
					<td>$<c:out value="${exp.amount}"></c:out></td>
					<td><a href="/expense/edit/${exp.id}">edit</a> | 
					<form action="/expense/delete/${exp.id}" method="post">
						<input type="hidden" name="_method" value="delete">
						<input type="submit" value="Delete">
					</form>
					</td>
				</tr>
			</c:forEach>
		</tbody>
	</table>
	<h2>Add an Expense:</h2>
	<form:form action="/expense" method="post" modelAttribute="expense">
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
</body>
</html>