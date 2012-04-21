/**
* Appcelerator Titanium Mobile
* This is generated code. Do not modify. Your changes *will* be lost.
* Generated code is Copyright (c) 2009-2011 by Appcelerator, Inc.
* All Rights Reserved.
*/
#import <Foundation/Foundation.h>
#import "TiUtils.h"
#import "ApplicationDefaults.h"
 
@implementation ApplicationDefaults
  
+ (NSMutableDictionary*) copyDefaults
{
    NSMutableDictionary * _property = [[NSMutableDictionary alloc] init];

    [_property setObject:[TiUtils stringValue:@"MeOc0tw6btQkAHe1WAk0x5MRJMizWgUl"] forKey:@"acs-oauth-secret-production"];
    [_property setObject:[TiUtils stringValue:@"6DBf3GsUWRJr3ZKIDolLolsGCAjktTnn"] forKey:@"acs-oauth-key-production"];
    [_property setObject:[TiUtils stringValue:@"7Rz86cNQOPlLaev33lj9hGROmuoHqh57"] forKey:@"acs-api-key-production"];
    [_property setObject:[TiUtils stringValue:@"jrnNIDl1Tl6M8ENO42JK9BfV1COhq8Ri"] forKey:@"acs-oauth-secret-development"];
    [_property setObject:[TiUtils stringValue:@"Y6pGrGDZSsjAiwna5LmsMj7OoNMWviLv"] forKey:@"acs-oauth-key-development"];
    [_property setObject:[TiUtils stringValue:@"8CStS75f2X9cZeSCW7NcJtbKUnIU9eH0"] forKey:@"acs-api-key-development"];
    [_property setObject:[TiUtils stringValue:@"system"] forKey:@"ti.ui.defaultunit"];

    return _property;
}
@end
