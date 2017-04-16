import { Inject, Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Sql } from '../core/sql.service';

import { LoadingController } from 'ionic-angular';
import * as moment from 'moment';

import { Observable } from 'rxjs/Rx';

// Import RxJs required methods
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';

@Injectable()
export class OnBoardingService {}