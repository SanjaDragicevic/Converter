converter(10, 'EUR', 'BAM');
converter(10, 'EUR', 'RSD');
converter(10, 'EUR', 'USD');
converter(10, 'EUR', 'HRK');
converter(10, 'BAM', 'HRK');

function converter(iznos, valuta_in, valuta_out){
	var euro_bam = 1.95;
	var euro_rsd = 119;
	var euro_usd = 1.18;
	var euro_hrk = 7.51;
	var bam_rsd = 60.98;
	var bam_usd = 0.60;
	var bam_hrk = 3.84;
	var usd_rsd = 100.90;
	var hrk_rsd = 15.89;
	var usd_hrk = 6.35;
	var result = 0;

	switch (true){
		case (valuta_in == 'EUR') && (valuta_out == 'BAM'):
			result = iznos * euro_bam;
			break;
		case (valuta_in == 'BAM') && (valuta_out == 'EUR'):
			result = iznos * (1/euro_bam);
			break;
		case (valuta_in == 'EUR') && (valuta_out == 'RSD'):
			result = iznos * euro_rsd;
			break;
		case (valuta_in == 'RSD') && (valuta_out == 'EUR'):
			result = iznos * (1/euro_rsd);
			break;
		case (valuta_in == 'EUR') && (valuta_out == 'USD'):
			result = iznos * euro_usd;
			break;
		case (valuta_in == 'USD') && (valuta_out == 'EUR'):
			result = iznos * (1/euro_usd);
			break;
		case (valuta_in == 'EUR') && (valuta_out == 'HRK'):
			result = iznos * euro_hrk;
			break;
		case (valuta_in == 'HRK') && (valuta_out == 'EUR'):
			result = iznos * (1/euro_hrk);
			break;
		case (valuta_in == 'BAM') && (valuta_out == 'RSD'):
			result = iznos * bam_rsd;
			break;
		case (valuta_in == 'RSD') && (valuta_out == 'BAM'):
			result = iznos * (1/bam_rsd);
			break;
		case (valuta_in == 'BAM') && (valuta_out == 'USD'):
			result = iznos * bam_usd;
			break;
		case (valuta_in == 'USD') && (valuta_out == 'BAM'):
			result = iznos * (1/bam_usd);
			break;
		case (valuta_in == 'BAM') && (valuta_out == 'HRK'):
			result = iznos * bam_hrk;
			break;
		case (valuta_in == 'HRK') && (valuta_out == 'BAM'):
			result = iznos * (1/bam_hrk);
			break;
		case (valuta_in == 'USD') && (valuta_out == 'RSD'):
			result = iznos * usd_rsd;
			break;
		case (valuta_in == 'RSD') && (valuta_out == 'USD'):
			result = iznos * (1/usd_rsd);
			break;
		case (valuta_in == 'USD') && (valuta_out == 'HRK'):
			result = iznos * usd_hrk;
			break;
		case (valuta_in == 'HRK') && (valuta_out == 'USD'):
			result = iznos * (1/usd_hrk);
			break;
		case (valuta_in == 'HRK') && (valuta_out == 'RSD'):
			result = iznos * hrk_rsd;
			break;
		case (valuta_in == 'RSD') && (valuta_out == 'HRK'):
			result = iznos * (1/hrk_rsd);
			break;
		default:
    		console.log('Niste uneli ispravnu valutu');
	}
		console.log(iznos + ' ' + valuta_in + ' = ' + result + ' ' + valuta_out);
}