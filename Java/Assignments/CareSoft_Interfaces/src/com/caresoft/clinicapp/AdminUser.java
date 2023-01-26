package com.caresoft.clinicapp;

import java.util.ArrayList;
import java.util.Date;

public class AdminUser extends User implements HIPAAComliantUser, HIPAACompliantAdmin {
	private String role;
	private ArrayList<String> securityIncidents;
	
	// ===== Constructor ===== //
	public AdminUser(Integer id, String role) {
		super(id);
		this.role = role;
		this.securityIncidents = new ArrayList<String>();
	}

	
	// ===== Methods ===== //
	@Override
	public ArrayList<String> reportSecurityIncidents() {
		// TODO Auto-generated method stub
		
		return this.securityIncidents;
	}

	@Override
	public boolean assignPin(int pin) {
		// TODO Auto-generated method stub
		if (pin < 100000 || pin > 999999) {
			return false;
		}
		return true;
	}

	@Override
	public boolean accessAuthorized(Integer confirmedAuthID) {
		// TODO Auto-generated method stub
		if (confirmedAuthID == this.id) {
			return true;
		}
		this.authIncident();
		return false;
	}
	
	public void newIncident(String notes) {
		String report = String.format("Datetime submitted: $s \n, Reported by ID: $s\n Notes: $s \n",
				new Date(), this.id, notes);
		securityIncidents.add(report);
	}
	
	public void authIncident() {
        String report = String.format(
                "Datetime Submitted: %s \n,  ID: %s\n Notes: %s \n", 
                new Date(), this.id, "AUTHORIZATION ATTEMPT FAILED FOR THIS USER"
            );
        securityIncidents.add(report);
	}

}
