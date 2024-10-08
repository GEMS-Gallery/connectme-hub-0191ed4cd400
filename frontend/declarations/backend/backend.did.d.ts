import type { Principal } from '@dfinity/principal';
import type { ActorMethod } from '@dfinity/agent';
import type { IDL } from '@dfinity/candid';

export interface _SERVICE {
  'getBio' : ActorMethod<[], string>,
  'getContactInfo' : ActorMethod<[], [string, string, string]>,
  'getName' : ActorMethod<[], string>,
  'getProfilePicture' : ActorMethod<[], string>,
  'getProjects' : ActorMethod<[], Array<[string, string, string]>>,
  'getSkills' : ActorMethod<[], Array<string>>,
  'getSocialLinks' : ActorMethod<[], Array<[string, string]>>,
  'getTestimonials' : ActorMethod<[], Array<[string, string, string]>>,
  'getTimeAllocation' : ActorMethod<[], Array<[string, bigint]>>,
}
export declare const idlFactory: IDL.InterfaceFactory;
export declare const init: (args: { IDL: typeof IDL }) => IDL.Type[];
