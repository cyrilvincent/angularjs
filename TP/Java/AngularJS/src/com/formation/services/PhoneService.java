package com.formation.services;

import src.formation.repositories.*;

import com.formation.entities.*;
import com.formation.tos.*;

public class PhoneService implements IPhoneService {

	private PhoneRepository phoneRepository = new PhoneRepository();
	
	
	@Override
	public PhoneTO getById(String id) {
		Phone p = phoneRepository.getById(id);
		PhoneAdapter adapt = new PhoneAdapter();
		return adapt.toPhoneTO(p);
	}

}
