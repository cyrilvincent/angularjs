package com.formation.services;

import com.formation.entities.Phone;
import com.formation.tos.PhoneTO;

public class PhoneAdapter {

	public PhoneTO toPhoneTO(Phone p) {
		PhoneTO to = new PhoneTO();
		to.setAge(p.getAge());
		to.setId(p.getId());
		to.setImageUrl(p.getImageUrl());
		to.setName(p.getName());
		to.setSnippet(p.getSnippet());
		return to;
	}

	
	
}
